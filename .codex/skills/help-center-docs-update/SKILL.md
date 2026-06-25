---
name: help-center-docs-update
description: Update Invarion Help Center documentation from rough natural-language instructions, transcripts, voice recordings, screenshots, release notes, product specs, or other source material. Use when Codex needs to decide which Help Center pages to edit or add, process documentation screenshots/assets, verify neighboring and cross-linked docs for consistency, and hand off a summary of local documentation changes.
---

# Help Center Docs Update

Use this skill for Invarion Help Center documentation updates in this repository.

The user may provide rough notes from sales, QA, development, or support. Treat source material as directional, not publication-ready. Analyze it against the existing docs, clarify only what is ambiguous, make the local changes, verify consistency, and summarize what changed.

## Intake

1. Identify the affected product or section: RapidPlan, RapidPath, RapidPlan Online, RapidPath Online, or Accounts & Setup.
2. Identify the requested scope: a specific feature/workflow, a category overview, release-driven updates, screenshots/assets, or a broader documentation refresh.
3. Identify all referenced inputs: typed instructions, transcripts, voice recordings, screenshots, videos, release notes, specs, tickets, internal notes, and links.
4. If links or files are inaccessible, ask for access, exported copies, or pasted excerpts.
5. Ask clarification questions only when the target, behavior, attachment mapping, or requested output cannot be inferred safely from the sources and existing docs.

## Voice Recordings

If the user provides a voice recording:

1. Check whether local transcription can run.
2. Read `references/transcription-setup.md` only when transcription setup, verification, or fallback details are needed.
3. Use `scripts/transcribe_audio.py --check-env` to diagnose the environment.
4. Diagnose prerequisites separately: Python, `ffmpeg` on `PATH`, `faster-whisper` in `.transcription\libs`, model cache availability for offline use, and access to the audio file.
5. If transcription is not ready, tell the user only the missing manual setup steps. For example, if `faster-whisper` is installed but `ffmpeg` is missing, only explain how to install `ffmpeg`, add it to `PATH`, and verify it.
6. Offer the quick fallback: the user can transcribe the recording externally and paste the transcript.

## Attachments

When attachments are referenced:

1. Make sure each referenced attachment can be identified.
2. If the user refers to "first", "second", or similar ordering, check filenames, timestamps, or metadata.
3. If the user refers to visible content, inspect the file directly.
4. If the mapping is ambiguous, ask before editing.
5. If the user requests processing, such as merging screenshots into a comparison image, produce the derived artifact locally when feasible and visually inspect it before use.

## Documentation Analysis

Before editing:

1. Search for feature names, product terms, previous names, UI labels, and likely synonyms.
2. Decide whether the change belongs in an existing page, a new page, a category overview, release notes, shared product docs, FAQs, or cross-linked workflow pages.
3. Prefer updating existing pages when extending documented functionality or filling missing details.
4. Create a new page when the topic is large enough to stand alone or no existing page fits.
5. Check nearby pages in the same category and pages that link to or from the target.
6. Check shared-documentation relationships. RapidPath often relies on RapidPlan docs for shared workflows; RapidPath Online often relies on RapidPlan Online docs.

## Writing

Write for Help Center readers who want to complete a task or understand a feature.

- Match surrounding page style and terminology.
- Use practical headings such as "Choose a provider", "Import aerial photos", or "Google annotation levels".
- Explain what the feature does, when to use it, and how to configure it.
- Use numbered steps for workflows and concise bullets for option definitions.
- Preserve historical release note wording unless the task explicitly asks to update release notes.
- Avoid unsupported claims. If behavior is not confirmed by the source material or existing docs, inspect further or ask.
- Keep scope tight. Do not refactor unrelated content unless needed for consistency.

## Assets

When adding or updating assets:

1. Store assets near related documentation, following existing folder conventions.
2. Use descriptive lowercase hyphenated filenames for new assets unless the surrounding directory clearly follows another convention.
3. Use attached assets as-is when the user asks for that.
4. Process assets when requested or when a derived artifact clearly improves the documentation, such as a mosaic comparing several views.
5. Keep processed images readable at normal Help Center page width.
6. Visually inspect generated or edited images before referencing them.
7. Add concise alt text in Markdown image references.
8. Do not include every supplied screenshot automatically; select assets that support the documentation goal.

## Consistency Review

Always verify neighboring and cross-linked content after making documentation changes.

1. Search for the same feature names, old terminology, and related UI labels across relevant product docs.
2. Check same-category pages for contradictions, duplicated explanations, missing links, or outdated terminology.
3. Check related FAQ, release note, setup, import/export, and shared-doc pages when relevant.
4. Update cross-links when adding a new page or when related pages should point to updated content.
5. Leave historical release notes unchanged unless they are factually misleading for current documentation or the user asked for release note updates.
6. If a term changed over time, explain the current term and mention the older term once when useful for recognition.

## Verification

After editing:

1. Review the diff.
2. Build the site with the repo's documented command. On Windows, prefer `yarn.cmd build`; if Yarn path resolution fails, use `node_modules\.bin\docusaurus.cmd build`.
3. Run lint where practical. If repo-wide lint fails on pre-existing unrelated issues, report that clearly and run a target-only check on touched files where possible.
4. Visually inspect generated or edited images.
5. If navigation, search behavior, category metadata, or sidebars changed, verify the affected page locally.

## Handoff

Summarize:

- pages changed or added;
- assets added, replaced, or generated;
- important wording or structure changes;
- neighboring or cross-linked docs checked;
- verification performed;
- known limitations, unresolved questions, or unrelated pre-existing failures.

Summarize what actually changed locally, not just what was intended.
