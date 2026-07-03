# Help Center Documentation Style Guide

Use this guide when creating, rewriting, or reviewing Invarion Help Center documentation. The Help Center must serve first-time customers, blocked users looking for fixes, and professional users trying to improve their workflow.

## Editorial Goals

Write documentation that is:

- **Task-first**: help the reader complete a real action or understand a specific feature.
- **Skimmable**: make the next useful step visible within a few seconds.
- **Precise**: use exact product, UI, file, license, and workflow names.
- **Consistent**: use the same terms and article structure across RapidPlan, RapidPath, online products, and account/setup content.
- **Support-ready**: include prerequisites, expected results, troubleshooting branches, and escalation points where relevant.

## Audience Model

Assume one of three reader modes:

- **New customer**: needs installation, sign-in, license, first-plan, and onboarding guidance. Avoid unexplained product jargon.
- **Blocked customer**: has a problem and wants diagnosis, workaround, or support escalation. Put symptoms and fixes before background explanation.
- **Professional user**: already knows the basics and wants efficient workflows, advanced tools, quality output, and edge-case behavior.

Do not write for an internal product expert unless the article is explicitly an advanced reference.

## Tone

- Use calm, direct, professional language.
- Prefer active voice: "Select **Open**" instead of "The **Open** button should be selected."
- Use "you" for user actions.
- Avoid marketing claims unless they clarify product purpose.
- Avoid apologies, hype, jokes, and filler.
- Do not blame the user. Use "If the issue continues..." instead of "If you still cannot..."

## Article Types

Choose one primary article type before editing.

### How-to

Use for a task the user wants to complete.

Recommended structure:

1. Title: imperative or task phrase, for example "Create a base map plan".
1. Short intro: one or two sentences explaining when to use the article.
1. Prerequisites, if needed.
1. Numbered steps.
1. Expected result.
1. Related articles.

### Troubleshooting

Use for failures, errors, missing access, or confusing application states.

Recommended structure:

1. Title starts with "Troubleshoot..." or names the visible problem.
1. Symptoms: what the user sees.
1. Quick checks.
1. Cause-specific sections.
1. Workaround or fix.
1. What to send to Technical Support if unresolved.

### Reference

Use for tool, palette, property, format, or concept descriptions.

Recommended structure:

1. What it is.
1. Where to find it.
1. Main options or properties.
1. Notes, limitations, and related workflows.

### Best Practice

Use for professional workflows and advanced efficiency guidance.

Recommended structure:

1. Problem or scenario.
1. Recommended workflow.
1. Why this approach helps.
1. Variations, limitations, and related tools.

## Titles And Headings

- Use sentence case for article titles and headings: "Create a base map plan", not "Create a Base Map Plan".
- Keep titles specific and searchable.
- Avoid vague titles such as "Overview", "Introduction", and "What this section covers" unless the page is a category landing page.
- Do not refer to "chapter", "manual", or "section" unless quoting legacy product UI.
- Use headings to separate tasks, symptoms, or concepts, not to create artificial hierarchy.
- Use concrete headings that name the task, option, or state, such as "Choose a provider", "Import aerial photos", or "Google annotation levels".

## Standard Terms

Use these terms consistently.

| Use | Avoid |
| --- | --- |
| Help Center | manual, documentation site, docs site |
| article | chapter, manual page |
| sign in | login, log into |
| sign-in page | login page |
| right-click | Right click, right mouse button |
| double-click | Double click |
| select | click on, press on |
| dialog | dialogue, dialog box |
| Properties palette | properties palette, properties panel |
| Tools palette | Tools Palette |
| Signs palette | Signs Palette |
| canvas | Canvas Area, canvas area, drawing canvas unless needed |
| Technical Support | support, tech support |
| Invarion Launcher | Launcher on first use is acceptable after definition |
| Invarion Cloud | Cloud on first use only if context is clear |

Use product names exactly:

- RapidPlan
- RapidPath
- RapidPlan Online
- RapidPath Online
- Invarion Cloud
- Invarion Launcher

## UI And Action Wording

- Bold visible UI labels: select **Create**, open **Settings**, choose **New plan**.
- Use `>` for menu paths: **File** > **New Plan Wizard**.
- Use keyboard shortcuts as bold text: **Ctrl+Z**.
- Use "select" for buttons, menu items, checkboxes, and tools.
- Use "enter" for text fields.
- Use "open" for files, windows, dialogs, applications, and pages.
- Use "right-click", "double-click", and "drag" for pointer actions.
- Do not capitalize generic actions: "right-click the road", not "Right-click the Road".

## Structure And Readability

- Put the outcome before the steps.
- Keep intros short. Most articles need one or two opening sentences.
- Prefer short paragraphs of one to three sentences.
- Split sentences over about 30 words unless the wording would become less clear.
- Use numbered lists for ordered procedures.
- Use bullets for unordered options, checks, or requirements.
- Include prerequisites before steps when missing setup would block the task.
- Include the expected result after complex steps.
- For feature articles, explain what the feature does, when to use it, and how to configure it before covering edge cases.
- Do not mix tutorial, troubleshooting, and reference content in one long article if separate articles would be easier to scan.

## Notes, Warnings, And Support Escalation

Use notes sparingly.

- **Note:** useful context that does not interrupt the task.
- **Tip:** efficiency improvement or optional shortcut.
- **Important:** risk of data loss, license impact, irreversible change, or compliance issue.

When escalation is needed, state exactly what to provide:

- product name and version;
- account email or company name, if relevant;
- diagnostic report;
- plan file, screenshot, or exported file;
- steps that reproduce the issue.

## Links

- Link to the most specific related article.
- Prefer relative links for nearby docs in the same section.
- Avoid stale route fragments such as `/docs/rapid-online/...`; use current product routes.
- Check that link text describes the destination. Avoid "click here".
- Do not overload articles with long lists of loosely related links. Use a "Related articles" section when helpful.

## Images And Assets

- Use images to confirm UI location, expected output, or visually complex steps.
- Add meaningful alt text that identifies the UI or result.
- Place the image near the step it supports.
- Do not rely on screenshots alone. The surrounding text must still explain the action.
- Remove outdated screenshots when UI labels, layout, or icons have changed.
- Store assets near the related article, following existing folder conventions.
- Use descriptive lowercase hyphenated filenames for new assets unless the surrounding directory clearly follows another convention.
- Keep processed images readable at normal Help Center page width.

## Markdown And Docusaurus

- Keep front matter minimal and valid.
- Use `sidebar_position` only when manual ordering is needed.
- Use fenced code blocks for commands.
- Use inline code for file names, extensions, URLs shown as examples, and literal values.
- Avoid raw HTML unless there is no Markdown equivalent.
- Do not add manual heading anchors unless required for stable external links.

## Page Tagging

Create or review page tags after editing any article. Tags should support topic discovery and cross-product workflows; they are not a replacement for product navigation, sidebar position, or folder structure.

Use tags for:

- workflows that can span products, such as `getting-started`, `printing-exporting`, `mapping-geospatial`, `swept-path-analysis`, `licenses-access`, and `troubleshooting`;
- task families, such as `import`, `sharing`, `account-management`, `launcher`, `drawing-editing`, and `vehicles`;
- major support themes that users may search across products.

Do not use tags for:

- product names already represented by the section, such as `rapidplan`, `rapidpath`, or `rapidplan-online`;
- sidebar categories or page order;
- one-off UI labels that are unlikely to connect related articles;
- near-duplicates, plural variants, or spelling variants.

When editing tags:

- prefer existing topic tags before creating new ones;
- add only tags that describe the article's main user task or support topic;
- remove stale tags when the article focus changes;
- keep tag count small enough that each tag remains meaningful.

## Consistency Checks Before Finishing

For any changed article, check:

- The title clearly matches the user's task, problem, or concept.
- The opening paragraph explains when to use the article.
- Product names and UI terms match this guide.
- Procedures use numbered lists and each step renders correctly.
- Screenshots are still relevant and placed near the matching step.
- New or edited image assets follow the repository's location and filename conventions.
- Links resolve to current Help Center routes.
- Tags support topic discovery and cross-product workflows.
- The article does not refer to "chapter", "manual", or outdated navigation.
- The article includes next steps or related articles where the user may naturally continue.

For broad cleanup passes, look for categories of issues rather than only exact strings. Examples include:

- mixed verb and noun forms, such as `login` used where "sign in" is intended;
- regional or legacy UI terminology variants, such as `dialogue` where "dialog" is the standard term;
- inconsistent pointer-action wording, such as non-hyphenated right-click or double-click variants;
- inconsistent capitalization of repeated UI areas, such as palette names;
- legacy document framing, such as references to chapters or manuals;
- malformed Markdown list spacing, such as step numbers attached directly to text;
- common typo patterns and misspelled product or workflow terms.

## Mechanical Lint Pass

Run the project Markdown lint check after documentation changes:

```powershell
yarn.cmd lint
```

For targeted review, also use search. The keywords below are examples only; adapt the expression to the article type, product area, and consistency issue being reviewed:

```powershell
rg -n "\b(login|dialogue|Right click|right mouse button|Double click|chapter|manual)\b" docs -g "*.md"
```

Linting is not a substitute for editorial review. It catches formatting issues; the agent still needs to check tone, task flow, links, terminology, and reader fit.
