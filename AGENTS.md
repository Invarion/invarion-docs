# Codex Instructions

## Release Notes Automation PR Comments

These rules apply when Codex is triggered from comments on release notes automation pull requests in this repository.

Automation PRs are docs-only PRs that update a release notes file. The product, source repository, release month, branch name, target release notes path, Slack channel, and candidate list are defined by the automation PR body and by the source repository's release notes automation configuration. Do not infer or hard-code those values from this file.

Automation PR branches commonly use a name like:

```text
automation/release-notes/<product>/<yyyy-mm>
```

Use the actual PR head branch and the target path stated in the PR/config for the current run.

### Supported Reviewer Commands

Only act on explicit command lines that start with one of these commands, ignoring case and tolerating extra spaces:

```text
@codex include <candidate text>
@codex remove <published note text>
```

Do not act on informal requests unless they use this command syntax.

### Required Behavior

- Never create a follow-up PR for an `include` or `remove` command.
- Apply all unambiguous changes directly to the existing automation PR head branch.
- Use the release notes file path from the automation PR/config for the current run.
- Keep the PR draft/ready state unchanged.
- For `include`, match the command text against the visible `Candidate reviewed but not added` section in the PR body. Require exactly one match.
- For `remove`, match the command text against existing published release-note bullets in the target month section only. Require exactly one match.
- Sanitize release-note wording before publishing. Do not include internal IDs, source PR numbers, commit hashes, private task links, Notion links, or implementation details in the release notes file.
- Do not duplicate an existing release-note bullet.
- Update the PR body after an include by removing included candidates from `Candidate reviewed but not added`; remove the section if it becomes empty.
- For mixed include/remove comments, apply all unambiguous commands in one commit and report skipped ambiguous commands in a PR comment.

### Required Publication Verification

Before reporting success, verify publication against GitHub, not just the local checkout.

1. Fetch PR metadata before editing and record the current head SHA.
2. Determine the release notes file path from the automation PR/config for the current run.
3. Fetch the latest release notes file from the existing PR head branch.
4. Apply the requested changes to the existing PR head branch.
5. Update the PR description candidate list when needed.
6. Fetch PR metadata again and verify the head SHA changed.
7. Fetch the release notes file from the new PR head SHA and verify the requested include/remove change is present in the target month section.
8. Post a PR comment summarizing applied and skipped commands, including the new commit SHA.

If any verification step fails, report the command as not applied. Do not claim a commit, push, PR update, or successful include/remove unless the existing automation PR branch has been verified with the updated head SHA and file content.

### Slack Follow-Up

If the release notes automation PR body, source configuration, or linked runbook specifies a Slack follow-up channel, send the follow-up only after the GitHub publication verification succeeds. If Slack access cannot be verified, stop before committing when the runbook requires Slack verification.
