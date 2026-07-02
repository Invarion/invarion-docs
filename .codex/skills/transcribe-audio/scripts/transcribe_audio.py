#!/usr/bin/env python
r"""Transcribe audio or video files with faster-whisper.

One-time dependency install:
  python "%USERPROFILE%\.codex\skills\transcribe-audio\scripts\transcribe_audio.py" --install-env

Examples:
  python "%USERPROFILE%\.codex\skills\transcribe-audio\scripts\transcribe_audio.py" --check-env
  python "%USERPROFILE%\.codex\skills\transcribe-audio\scripts\transcribe_audio.py" "C:\path\clip.m4a" --output "C:\path\transcript.txt"
"""

from __future__ import annotations

import argparse
import hashlib
import os
import shutil
import subprocess
import sys
import tempfile
import urllib.request
import zipfile
from pathlib import Path


SKILL_ROOT = Path(__file__).resolve().parents[1]
CODEX_HOME = Path(os.environ.get("CODEX_HOME") or Path.home() / ".codex")
TRANSCRIPTION_DIR = CODEX_HOME / "tools" / "transcribe-audio"
LIB_DIR = TRANSCRIPTION_DIR / "libs"
MODEL_DIR = TRANSCRIPTION_DIR / "models"
FFMPEG_ROOT = CODEX_HOME / "tools" / "ffmpeg" / "current"
FFMPEG_BIN_DIR = FFMPEG_ROOT / "bin"
FFMPEG_EXE = FFMPEG_BIN_DIR / "ffmpeg.exe"
FFMPEG_ZIP_URL = "https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip"
FFMPEG_SHA_URL = FFMPEG_ZIP_URL + ".sha256"
DEFAULT_MODEL = "base"
REQUIRED_MODEL_FILES = ("config.json", "model.bin", "tokenizer.json")
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


def add_local_tools_to_path() -> None:
    if FFMPEG_EXE.exists():
        os.environ["PATH"] = str(FFMPEG_BIN_DIR) + os.pathsep + os.environ.get("PATH", "")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Transcribe audio/video files quickly with faster-whisper.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=(
            "Common input formats: "
            + ", ".join(sorted(COMMON_INPUT_EXTENSIONS))
            + "\nInstall ffmpeg and add it to PATH for robust decoding and conversion."
        ),
    )
    parser.add_argument("audio", nargs="?", help="Path to the audio/video file to transcribe.")
    parser.add_argument("--model", default=DEFAULT_MODEL, help="Model size/name. Good defaults: tiny, base, small, base.en.")
    parser.add_argument("--language", default="auto", help="Language code such as en, es, pl, or auto for detection.")
    parser.add_argument("--output", help="Optional transcript output path.")
    parser.add_argument("--offline", action="store_true", help="Use only cached models; do not download.")
    parser.add_argument("--timestamps", action="store_true", help="Include segment timestamps in the transcript.")
    parser.add_argument("--plain", action="store_true", help="Deprecated compatibility flag; transcripts are plain by default.")
    parser.add_argument("--word-confidence", action="store_true", help="Print word-level probabilities.")
    parser.add_argument("--check-env", action="store_true", help="Check local dependencies and exit.")
    parser.add_argument("--install-env", action="store_true", help="Install local transcription dependencies.")
    parser.add_argument("--download-model", action="store_true", help="Download/cache the selected model and exit.")
    return parser.parse_args()


def python_is_supported() -> bool:
    return sys.version_info >= (3, 10)


def model_repo_id(model_name: str) -> str:
    from faster_whisper.utils import _MODELS

    if "/" in model_name:
        return model_name
    repo_id = _MODELS.get(model_name)
    if repo_id is None:
        expected = ", ".join(_MODELS.keys())
        raise ValueError(f"Invalid model size '{model_name}', expected one of: {expected}")
    return repo_id


def missing_model_files(model_path: Path) -> list[str]:
    missing: list[str] = []
    for filename in REQUIRED_MODEL_FILES:
        candidate = model_path / filename
        if not candidate.is_file() or candidate.stat().st_size == 0:
            missing.append(filename)

    vocab_files = [path for path in model_path.glob("vocabulary.*") if path.is_file() and path.stat().st_size > 0]
    if not vocab_files:
        missing.append("vocabulary.*")

    return missing


def cached_model_status(model_name: str) -> tuple[bool, str | None, Path | None, list[str]]:
    add_local_libs()
    repo_id = model_repo_id(model_name)

    from faster_whisper.utils import download_model

    try:
        model_path = Path(download_model(model_name, cache_dir=str(MODEL_DIR), local_files_only=True))
    except Exception:
        return False, repo_id, None, ["model snapshot"]

    missing_files = missing_model_files(model_path)
    return not missing_files, repo_id, model_path, missing_files


def download_model_files(model_name: str) -> Path:
    add_local_libs()
    repo_id = model_repo_id(model_name)
    MODEL_DIR.mkdir(parents=True, exist_ok=True)

    from faster_whisper.utils import download_model

    print(f"download_model={repo_id}")
    print(f"setup_location={MODEL_DIR}")
    model_path = Path(download_model(model_name, cache_dir=str(MODEL_DIR), local_files_only=False))
    missing_files = missing_model_files(model_path)
    if missing_files:
        raise RuntimeError(f"Model cache is incomplete at {model_path}; missing: {', '.join(missing_files)}")
    print(f"model_cached={model_path}")
    return model_path


def print_setup_hint(
    missing: list[str],
    model_name: str = DEFAULT_MODEL,
    model_repo: str | None = None,
    model_files: list[str] | None = None,
) -> None:
    if "python" in missing:
        print("missing_setup=python>=3.10")
        print("setup: install Python 3.10 or newer, add python.exe to PATH, restart PowerShell, then run python --version")
    if "ffmpeg" in missing:
        print("missing_setup=ffmpeg")
        print(f"setup_location={FFMPEG_ROOT}")
    if "faster-whisper" in missing:
        print("missing_setup=faster-whisper")
        print(f"setup_location={LIB_DIR}")
    if "model" in missing:
        print("missing_setup=model")
        print(f"model={model_name}")
        if model_repo:
            print(f"model_repo={model_repo}")
        print(f"setup_location={MODEL_DIR}")
        if model_files:
            print(f"missing_model_files={', '.join(model_files)}")
        print(f"setup_command=python \"{Path(__file__).resolve()}\" --download-model --model \"{model_name}\"")
    if any(item in missing for item in ("python", "ffmpeg", "faster-whisper")):
        print("setup: ask the user to approve one-off environment setup, then run this script with --install-env")
    elif "model" in missing:
        print("setup: ask the user to approve downloading the selected model files, then run the setup_command above")


def ffmpeg_is_available() -> bool:
    return FFMPEG_EXE.exists()


def faster_whisper_is_installed() -> bool:
    add_local_libs()
    try:
        import faster_whisper  # noqa: F401
    except ImportError:
        return False
    return True


def download_file(url: str, destination: Path) -> None:
    with urllib.request.urlopen(url) as response, destination.open("wb") as output:
        shutil.copyfileobj(response, output)


def install_ffmpeg() -> None:
    if FFMPEG_EXE.exists():
        print(f"ffmpeg_already_installed={FFMPEG_EXE}")
        return
    FFMPEG_ROOT.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="codex-ffmpeg-") as tmp:
        tmp_path = Path(tmp)
        archive = tmp_path / "ffmpeg-release-essentials.zip"
        sha_file = tmp_path / "ffmpeg-release-essentials.zip.sha256"
        extract_dir = tmp_path / "extract"

        print(f"download={FFMPEG_ZIP_URL}")
        download_file(FFMPEG_ZIP_URL, archive)
        download_file(FFMPEG_SHA_URL, sha_file)

        expected = sha_file.read_text(encoding="utf-8").strip().split()[0].upper()
        actual = hashlib.sha256(archive.read_bytes()).hexdigest().upper()
        if actual != expected:
            raise RuntimeError(f"FFmpeg SHA-256 mismatch. Expected {expected} but got {actual}")

        with zipfile.ZipFile(archive) as zip_archive:
            zip_archive.extractall(extract_dir)

        candidates = list(extract_dir.rglob("ffmpeg.exe"))
        if not candidates:
            raise RuntimeError("ffmpeg.exe was not found in the downloaded archive")
        package_root = candidates[0].parent.parent
        if FFMPEG_ROOT.exists():
            raise RuntimeError(f"FFmpeg install target already exists: {FFMPEG_ROOT}")
        shutil.move(str(package_root), str(FFMPEG_ROOT))
        print(f"ffmpeg_installed={FFMPEG_EXE}")


def install_faster_whisper() -> None:
    if faster_whisper_is_installed():
        print(f"faster_whisper_already_installed={LIB_DIR}")
        return
    LIB_DIR.mkdir(parents=True, exist_ok=True)
    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", "--target", str(LIB_DIR), "faster-whisper"]
    )


def ensure_user_path_contains_ffmpeg() -> None:
    if os.name != "nt":
        return
    user_path = os.environ.get("PATH", "")
    try:
        import winreg
    except ImportError:
        return

    with winreg.OpenKey(winreg.HKEY_CURRENT_USER, "Environment", 0, winreg.KEY_READ | winreg.KEY_WRITE) as key:
        try:
            current_path, value_type = winreg.QueryValueEx(key, "Path")
        except FileNotFoundError:
            current_path, value_type = "", winreg.REG_EXPAND_SZ

        parts = [part for part in current_path.split(";") if part]
        normalized = {part.rstrip("\\").lower() for part in parts}
        bin_path = str(FFMPEG_BIN_DIR)
        if bin_path.rstrip("\\").lower() not in normalized:
            parts.append(bin_path)
            winreg.SetValueEx(key, "Path", 0, value_type, ";".join(parts))
            print(f"user_path_added={bin_path}")
        else:
            print(f"user_path_already_has={bin_path}")
    os.environ["PATH"] = str(FFMPEG_BIN_DIR) + os.pathsep + user_path


def install_env(model_name: str) -> int:
    if not python_is_supported():
        print("Python 3.10 or newer is required.", file=sys.stderr)
        return 2
    install_ffmpeg()
    ensure_user_path_contains_ffmpeg()
    install_faster_whisper()
    download_model_files(model_name)
    print(f"local_tools={TRANSCRIPTION_DIR}")
    print(f"model_cache={MODEL_DIR}")
    return check_env(model_name)


def check_env(model_name: str = DEFAULT_MODEL) -> int:
    add_local_libs()
    add_local_tools_to_path()
    print(f"python={sys.executable}")
    print(f"python_version={sys.version.split()[0]}")
    print(f"skill_root={SKILL_ROOT}")
    print(f"local_tools={TRANSCRIPTION_DIR}")
    print(f"local_libs={LIB_DIR} exists={LIB_DIR.exists()}")
    print(f"model_cache={MODEL_DIR} exists={MODEL_DIR.exists()}")
    print(f"ffmpeg_expected={FFMPEG_EXE} exists={FFMPEG_EXE.exists()}")
    print(f"ffmpeg_available={shutil.which('ffmpeg') or 'not found'}")

    missing: list[str] = []
    if not python_is_supported():
        missing.append("python")
    if not ffmpeg_is_available():
        missing.append("ffmpeg")

    model_repo = None
    model_files: list[str] = []
    try:
        import faster_whisper
    except ImportError:
        missing.append("faster-whisper")
    else:
        print(f"faster_whisper={faster_whisper.__version__}")
        try:
            model_ready, model_repo, model_path, model_files = cached_model_status(model_name)
        except ValueError as exc:
            print(f"invalid_model={exc}", file=sys.stderr)
            return 2
        print(f"selected_model={model_name}")
        if model_repo:
            print(f"selected_model_repo={model_repo}")
        print(f"selected_model_snapshot={model_path or 'not found'}")
        if not model_ready:
            missing.append("model")

    if missing:
        print_setup_hint(missing, model_name=model_name, model_repo=model_repo, model_files=model_files)
        return 2

    print("transcription_env=ready")
    return 0


def write_transcript(output: str | None, transcript: str) -> None:
    if not output:
        return
    output_path = Path(output).expanduser()
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(transcript + "\n", encoding="utf-8")
    print(f"saved_transcript={output_path}")


def main() -> int:
    args = parse_args()

    if args.install_env:
        return install_env(args.model)

    if args.check_env:
        return check_env(args.model)

    if args.download_model:
        add_local_libs()
        try:
            download_model_files(args.model)
        except ImportError:
            print(
                "Missing faster-whisper. Ask the user to approve one-off setup, then run this script with --install-env.",
                file=sys.stderr,
            )
            return 2
        except ValueError as exc:
            print(f"invalid_model={exc}", file=sys.stderr)
            return 2
        return check_env(args.model)

    if not args.audio:
        print("Audio file is required unless --check-env is used.", file=sys.stderr)
        return 2

    add_local_libs()
    add_local_tools_to_path()
    os.environ.setdefault("HF_HUB_DISABLE_XET", "1")

    try:
        from faster_whisper import WhisperModel
    except ImportError:
        print(
            "Missing faster-whisper. Run:\n"
            f"  python \"{Path(__file__).resolve()}\" --install-env",
            file=sys.stderr,
        )
        return 2

    if not ffmpeg_is_available():
        print(
            "Missing ffmpeg. Ask the user to approve one-off setup, then run this script with --install-env.",
            file=sys.stderr,
        )
        return 2

    try:
        model_ready, model_repo, model_path, model_files = cached_model_status(args.model)
    except ValueError as exc:
        print(f"invalid_model={exc}", file=sys.stderr)
        return 2
    if not model_ready:
        print("Missing cached model files. Ask the user to approve the model download before transcribing.", file=sys.stderr)
        print_setup_hint(["model"], model_name=args.model, model_repo=model_repo, model_files=model_files)
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
            f"Warning: uncommon input extension '{audio_path.suffix}'. If decoding fails, convert it with ffmpeg first.",
            file=sys.stderr,
        )

    MODEL_DIR.mkdir(parents=True, exist_ok=True)
    language = None if args.language.lower() == "auto" else args.language

    model = WhisperModel(
        args.model,
        device="cpu",
        compute_type="int8",
        download_root=str(MODEL_DIR),
        local_files_only=True,
    )
    segments, info = model.transcribe(
        str(audio_path),
        language=language,
        beam_size=5,
        vad_filter=True,
        word_timestamps=args.word_confidence,
    )

    lines: list[str] = []
    for segment in segments:
        text = segment.text.strip()
        if not text:
            continue
        if args.timestamps:
            lines.append(f"[{segment.start:.2f}-{segment.end:.2f}] {text}")
        else:
            lines.append(text)
        if args.word_confidence and segment.words:
            confidences = " ".join(f"{word.word.strip()}({word.probability:.2f})" for word in segment.words)
            lines.append(f"  words: {confidences}")

    transcript = "\n".join(lines)
    print(f"language={info.language} probability={info.language_probability:.3f}")
    print(transcript)
    write_transcript(args.output, transcript)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
