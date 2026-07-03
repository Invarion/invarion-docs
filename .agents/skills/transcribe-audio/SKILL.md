---
name: transcribe-audio
description: Transcribe audio or video files into text quickly with reasonable quality. Use whenever a user requests transcription, provides an audio recording, voice note, meeting recording, interview, screen recording, video clip, or whenever Codex needs audio contents during another task. Supports common formats such as .m4a, .mp3, .wav, .flac, .aac, .ogg, .opus, .mp4, .mov, .mkv, .webm, and .wma.
---

# Transcribe Audio

Use this skill to turn audio or video files into a usable transcript. Prefer fast local transcription with `faster-whisper` and CPU int8 inference. Produce a transcript good enough for downstream writing, summarization, documentation, issue triage, or task extraction unless the user explicitly requests high-accuracy/slow transcription.

## Workflow

1. Identify the audio/video file path and confirm it is accessible from the current environment.
2. Check the environment before the first transcription in a session:

   ```powershell
   python "$env:USERPROFILE\.codex\skills\transcribe-audio\scripts\transcribe_audio.py" --check-env
   ```

3. If the environment check reports missing prerequisites, invoke the Manual Environment Setup Gate below. Do not request command escalation as the approval mechanism.
4. After the user explicitly confirms environment setup in the conversation, run:

   ```powershell
   python "$env:USERPROFILE\.codex\skills\transcribe-audio\scripts\transcribe_audio.py" --install-env
   ```

   Add the same `--model <selected-model>` if the environment check used a non-default model. If the command then fails because of sandbox permissions, network access, or writing outside the workspace, rerun the same command with sandbox escalation.
5. After the user explicitly confirms a missing model download in the conversation, run:

   ```powershell
   python "$env:USERPROFILE\.codex\skills\transcribe-audio\scripts\transcribe_audio.py" --download-model --model base
   ```

   Use the same `--model` value selected for transcription. If the command then fails because of sandbox permissions, network access, or writing outside the workspace, rerun the same command with sandbox escalation.
6. Run transcription with the default model unless there is a reason to change it:

   ```powershell
   python "$env:USERPROFILE\.codex\skills\transcribe-audio\scripts\transcribe_audio.py" "C:\path\recording.m4a" --output "C:\path\transcript.txt"
   ```

7. Use the transcript as source material for the user's task. If transcription quality is visibly poor, rerun once with a larger model or explicit language. Run `--check-env --model <larger-model>` first, and invoke the Manual Environment Setup Gate before downloading any newly selected model.

## Model Choices

- Default: `base` with language auto-detection. This is a good balance for mixed-language generic transcription.
- Faster rough pass: `--model tiny`.
- Better quality, slower: `--model small`.
- English-only recordings: prefer `--model base.en --language en` for speed and quality.
- Transcription uses cached model files only. Download a selected model first with `--download-model`; `--offline` is retained for compatibility but normal transcription should not download models implicitly.

## Output Expectations

- Save transcripts to a file when the user will need reuse, quoting, review, or downstream edits.
- Produce plain text without timestamps by default.
- Use `--timestamps` only when the user asks for timestamps or traceability to source audio.
- Do not silently invent inaudible content. Mark uncertain phrases with `[unclear]` only when needed.
- If the user asks for a summary rather than a verbatim transcript, transcribe first, then summarize from the transcript.

## Missing Setup

The local transcription environment must have:

- Python 3.10 or newer available as `python`.
- `ffmpeg` installed at `%USERPROFILE%\.codex\tools\ffmpeg\current\bin\ffmpeg.exe`.
- `faster-whisper` installed at `%USERPROFILE%\.codex\tools\transcribe-audio\libs`.
- The selected faster-whisper model files cached under `%USERPROFILE%\.codex\tools\transcribe-audio\models`.

### Manual Environment Setup Gate

If `--check-env` reports any missing transcription prerequisite, stop immediately. Do not run `--install-env`, `--download-model`, `pip install`, FFmpeg download/install commands, or any other command that downloads packages, downloads model files, or writes to `%USERPROFILE%\.codex\tools`.

This setup approval must be an explicit operator confirmation in the conversation. Do not use Codex command approval, sandbox escalation approval, auto-approval, or an escalated shell command prompt as a substitute for this confirmation.

Before waiting, report exactly:

- The missing component names reported by `--check-env`.
- For `missing_setup=model`, the selected model, model repo, cache location, and missing model files reported by `--check-env`.
- The install locations:

  ```text
  %USERPROFILE%\.codex\tools\ffmpeg\current
  %USERPROFILE%\.codex\tools\transcribe-audio\libs
  %USERPROFILE%\.codex\tools\transcribe-audio\models
  ```

- Setup may take a few minutes and is a one-off local environment step.
- The exact setup command that would be run after approval.

Then ask for explicit confirmation and wait for the operator to reply in the chat. Only after that confirmation may Codex run the setup command. If the confirmed setup command then requires sandbox escalation, follow the normal sandbox escalation process, but treat that as execution permission only, not as the required setup confirmation.

After explicit operator confirmation, run:

```powershell
python "$env:USERPROFILE\.codex\skills\transcribe-audio\scripts\transcribe_audio.py" --install-env
```

Add `--model <selected-model>` when needed. The installer downloads the Gyan.dev FFmpeg essentials build, verifies its SHA-256, installs `faster-whisper` with pip, downloads the selected model into the model cache, and adds the FFmpeg `bin` folder to the user `PATH` on Windows.

If only the selected model is missing, use the Manual Environment Setup Gate. After explicit operator confirmation, run:

```powershell
python "$env:USERPROFILE\.codex\skills\transcribe-audio\scripts\transcribe_audio.py" --download-model --model base
```

Use the model reported by `--check-env`; `base` is only the default.

For manual setup, use these locations:

- Python missing or too old: install Python 3.10 or newer, enable "Add python.exe to PATH", restart PowerShell, and verify with `python --version`.
- `ffmpeg` missing: install FFmpeg so `ffmpeg.exe` exists at `%USERPROFILE%\.codex\tools\ffmpeg\current\bin\ffmpeg.exe`.
- `faster-whisper` missing: run:

  ```powershell
  python -m pip install --target "$env:USERPROFILE\.codex\tools\transcribe-audio\libs" faster-whisper
  ```

- Model missing: after explicit operator confirmation, run `--download-model --model <selected-model>` so the selected model downloads into:

  ```text
  %USERPROFILE%\.codex\tools\transcribe-audio\models
  ```

If the audio file cannot be read because of sandbox permissions, request access to the file or ask the user to place a copy under the workspace.

## Troubleshooting

If decoding fails, convert to mono WAV with `ffmpeg`, then retry:

```powershell
ffmpeg -y -i "C:\path\input.any" -ac 1 -ar 16000 -c:a pcm_s16le "C:\path\input-16k-mono.wav"
python "$env:USERPROFILE\.codex\skills\transcribe-audio\scripts\transcribe_audio.py" "C:\path\input-16k-mono.wav" --output "C:\path\transcript.txt"
```

Use `--language <code>` when the language is known. Use `--language auto` when it is not.
