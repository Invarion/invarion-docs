# Fast Local Transcription Setup

Use this reference only when a Help Center documentation task includes a voice recording and transcription setup details are needed.

The reusable helper is `scripts/transcribe_audio.py` inside this skill. From the workspace root, run it as:

```powershell
python ".\.codex\skills\help-center-docs-update\scripts\transcribe_audio.py" --check-env
```

## Requirements

- Python 3.10 or newer
- `ffmpeg` installed and available on `PATH`
- `faster-whisper` installed into this workspace

`faster-whisper`/PyAV can read common audio and video containers directly, including `.m4a`, `.mp3`, `.wav`, `.flac`, `.aac`, `.ogg`, `.opus`, `.mp4`, `.mov`, `.mkv`, `.webm`, and `.wma`. Keeping `ffmpeg` on `PATH` gives a reliable fallback for conversion and preprocessing.

## One-Time Setup

From the workspace root:

```powershell
python -m pip install --target ".transcription\libs" faster-whisper
```

Install `ffmpeg` and add its `bin` folder, or the folder containing `ffmpeg.exe`, to the system or user `PATH`.

Check that PowerShell can find it:

```powershell
ffmpeg -version
```

Then verify the transcription environment:

```powershell
python ".\.codex\skills\help-center-docs-update\scripts\transcribe_audio.py" --check-env
```

The first transcription run downloads the selected Whisper model into:

```text
.transcription\models
```

After that, reruns with the same model are local and much faster. Use `--offline` when the model is already cached and network access should not be used.

## Transcribe A File

```powershell
python ".\.codex\skills\help-center-docs-update\scripts\transcribe_audio.py" "C:\path\voice-recording.m4a"
```

Save the transcript:

```powershell
python ".\.codex\skills\help-center-docs-update\scripts\transcribe_audio.py" "C:\path\voice-recording.mp3" --output ".\output\transcript.txt"
```

Run from cache only:

```powershell
python ".\.codex\skills\help-center-docs-update\scripts\transcribe_audio.py" "C:\path\voice-recording.wav" --offline
```

## Model Choices

Default recommendation:

```powershell
python ".\.codex\skills\help-center-docs-update\scripts\transcribe_audio.py" "C:\path\audio.m4a" --model base.en
```

Fastest rough transcription:

```powershell
python ".\.codex\skills\help-center-docs-update\scripts\transcribe_audio.py" "C:\path\audio.m4a" --model tiny.en
```

Better accuracy, slower:

```powershell
python ".\.codex\skills\help-center-docs-update\scripts\transcribe_audio.py" "C:\path\audio.m4a" --model small.en
```

## ffmpeg Fallback

If a file does not decode cleanly, convert it to a simple mono WAV and retry:

```powershell
ffmpeg -y -i "C:\path\input.any" -ac 1 -ar 16000 -c:a pcm_s16le ".\output\input_16k_mono.wav"
python ".\.codex\skills\help-center-docs-update\scripts\transcribe_audio.py" ".\output\input_16k_mono.wav"
```

## Missing Setup Guidance

When the environment is not ready, tell the user only the missing manual setup steps:

- If Python is missing or too old: install Python 3.10 or newer and make `python` available in PowerShell.
- If `ffmpeg` is missing: install `ffmpeg`, add the folder containing `ffmpeg.exe` to `PATH`, and verify with `ffmpeg -version`.
- If `faster-whisper` is missing: run `python -m pip install --target ".transcription\libs" faster-whisper` from the workspace root.
- If offline mode lacks a model cache: run once without `--offline` to download the selected model, or provide a cached model under `.transcription\models`.
- If the audio file cannot be read because of sandbox permissions: request the needed file access or ask the user to place the file under the workspace.

Also offer the quick fallback: the user can transcribe the recording externally and paste the transcript.

## Notes

- Do not assume a machine-specific `ffmpeg.exe` location. Prefer `ffmpeg` on `PATH`.
- Audio under user profile paths such as `C:\Users\...` may require sandbox escalation to read.
- The helper sets `HF_HUB_DISABLE_XET=1` automatically before model downloads.
- English-only transcription is the expected workflow, so `base.en`, `tiny.en`, and `small.en` are preferred.
