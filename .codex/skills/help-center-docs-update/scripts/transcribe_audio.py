#!/usr/bin/env python
r"""Transcribe an audio or video file with faster-whisper.

One-time dependency install:
  python -m pip install --target ".transcription\libs" faster-whisper

Usage:
  python ".\.codex\skills\help-center-docs-update\scripts\transcribe_audio.py" "C:\path\clip.m4a"
  python ".\.codex\skills\help-center-docs-update\scripts\transcribe_audio.py" --check-env
"""

from __future__ import annotations

import argparse
import os
import shutil
import sys
from pathlib import Path


def find_repo_root() -> Path:
    current = Path(__file__).resolve()
    for parent in current.parents:
        if (parent / "package.json").exists() and (parent / "docs").exists():
            return parent
    return current.parents[4]


REPO_ROOT = find_repo_root()
LIB_DIR = REPO_ROOT / ".transcription" / "libs"
MODEL_DIR = REPO_ROOT / ".transcription" / "models"
COMMON_INPUT_EXTENSIONS = {
    ".aac",
    ".aiff",
    ".flac",
    ".m4a",
    ".mkv",
    ".mov",
    ".mp3",
    ".mp4",
    ".ogg",
    ".opus",
    ".wav",
    ".webm",
    ".wma",
}


def add_local_libs() -> None:
    if LIB_DIR.exists():
        sys.path.insert(0, str(LIB_DIR))


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Transcribe English voice recordings with faster-whisper.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=(
            "Common input formats: "
            + ", ".join(sorted(COMMON_INPUT_EXTENSIONS))
            + "\nInstall ffmpeg and add it to PATH for conversion/preprocessing fallback."
        ),
    )
    parser.add_argument("audio", nargs="?", help="Path to the audio/video file to transcribe.")
    parser.add_argument("--model", default="base.en", help="Model size/name. Good defaults: tiny.en, base.en, small.en.")
    parser.add_argument("--language", default="en", help="Language code, or 'auto' for detection. Default: en.")
    parser.add_argument("--output", help="Optional text output path.")
    parser.add_argument("--offline", action="store_true", help="Use only cached models; do not download.")
    parser.add_argument("--word-confidence", action="store_true", help="Print word-level probabilities.")
    parser.add_argument("--check-env", action="store_true", help="Check local dependencies and exit.")
    return parser.parse_args()


def check_env() -> int:
    add_local_libs()
    print(f"python={sys.executable}")
    print(f"repo_root={REPO_ROOT}")
    print(f"local_libs={LIB_DIR} exists={LIB_DIR.exists()}")
    print(f"model_cache={MODEL_DIR} exists={MODEL_DIR.exists()}")
    print(f"ffmpeg_on_path={shutil.which('ffmpeg') or 'not found'}")

    try:
        import faster_whisper
    except ImportError:
        print("faster_whisper=not installed")
        print(f"install: python -m pip install --target \"{LIB_DIR}\" faster-whisper")
        return 2

    print(f"faster_whisper={faster_whisper.__version__}")
    return 0


def main() -> int:
    args = parse_args()

    if args.check_env:
        return check_env()

    if not args.audio:
        print("Audio file is required unless --check-env is used.", file=sys.stderr)
        return 2

    add_local_libs()
    os.environ.setdefault("HF_HUB_DISABLE_XET", "1")

    try:
        from faster_whisper import WhisperModel
    except ImportError:
        print(
            "Missing faster-whisper. Run:\n"
            f"  python -m pip install --target \"{LIB_DIR}\" faster-whisper",
            file=sys.stderr,
        )
        return 2

    audio_path = Path(args.audio).expanduser()
    if not audio_path.exists():
        print(f"Audio file not found: {audio_path}", file=sys.stderr)
        return 2
    if not audio_path.is_file():
        print(f"Input is not a file: {audio_path}", file=sys.stderr)
        return 2
    if audio_path.suffix.lower() not in COMMON_INPUT_EXTENSIONS:
        print(
            f"Warning: uncommon input extension '{audio_path.suffix}'. PyAV may still decode it; "
            "if it fails, convert it with ffmpeg first.",
            file=sys.stderr,
        )

    MODEL_DIR.mkdir(parents=True, exist_ok=True)
    language = None if args.language.lower() == "auto" else args.language

    model = WhisperModel(
        args.model,
        device="cpu",
        compute_type="int8",
        download_root=str(MODEL_DIR),
        local_files_only=args.offline,
    )
    segments, info = model.transcribe(
        str(audio_path),
        language=language,
        beam_size=5,
        vad_filter=False,
        word_timestamps=args.word_confidence,
    )

    lines: list[str] = []
    for segment in segments:
        text = segment.text.strip()
        if not text:
            continue
        lines.append(f"[{segment.start:.2f}-{segment.end:.2f}] {text}")
        if args.word_confidence and segment.words:
            confidences = " ".join(f"{word.word.strip()}({word.probability:.2f})" for word in segment.words)
            lines.append(f"  words: {confidences}")

    transcript = "\n".join(lines)
    print(f"language={info.language} probability={info.language_probability:.3f}")
    print(transcript)

    if args.output:
        output_path = Path(args.output)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(transcript + "\n", encoding="utf-8")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
