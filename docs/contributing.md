# Contributing to the project

Contribution to this project may come in different forms: writing a new article, refining an existing article, fixing a typo.

## Pre-requisites

- To make changes to the repository you need to have a github account that is linked to the Invarion organization.
- Clone the repository to your local machine.
- Make sure that you can run the project locally following the instructions in the [README.md](https://github.com/Invarion/invarion-docs/blob/master/README.md) file.

## Before you begin

Define the goal of your task. It should be clear what you want to achieve. The rule of thumb that the task should be small enough to be completed in between half a day and two days but big enough to be meaningful and provide value for the readers of the Help Centre. E.g. "write an article about new feature in RapidPlan", "split one large article into smaller ones", "fix typos", "update obsolete screenshots in **one** article".

Having reasonably small goals would help to avoid merge conflicts, prevent the writer from slipping into wrong direction, fail fast and what's the most important - making review process possible because the reviewer can only work with the changes that are small enough to be reviewed in a reasonable time.

## Workflow

- Switch to the `master` branch by running `git checkout master` or via IDE ![switch to master](./contributing-assets/switch-to-master.gif).
- Don't forget to pull latest changes from the remote repository by running `git pull master` or via IDE ![pull changes](./contributing-assets/pull.gif).
- Create a new branch by running `git checkout <branch-name>` or via IDE ![create branch](./contributing-assets/branching.gif)
  - branch name should be descriptive and reflect the goal of the task, written in kebab-case, e.g. `update-obsolete-screenshots-in-rapid-plan-article`, `explore-vehicle-library`.
- Start adjusting the content
- Once some progress is done that is worth fixation, commit the changes using commit button in the **Source Control** tab with message describing what was done. Remember that the task may (and often should) consist of multiple commits.
- Once the task is completed, push the changes to the remote repository by pressing on Push button.
- Go to the [github repository page](https://github.com/Invarion/invarion-docs/pulls) and create a new pull request by pressing on the **New pull request** button and selecting your branch in the compare list.

Example video of [the workflow](https://drive.google.com/file/d/1ecj_jVhb0tjvQ6zyMr5YCVN6Zrvwrtjw/view?usp=drive_link).

## Project structure

- Follow standard recommendations from [docusaurus documentation](https://docusaurus.io/docs/next/create-doc).
- Name files and folders in kebab-case, e.g. `new-feature-in-rapid-plan.md`, `vehicle-library`. No numbering is needed.
  - File names are usually in lowercase.
  - Words are separated by hyphens (-).
  - The file extension should be .md for Markdown files.
  - The document's id is determined by the file name. For example, if your file is named my-doc.md, the id of the document will be my-doc.

## Metadata and sidebar configuration

Each article and section may have metadata. Metadata is configured differently for articles and sections.

### Metadata for articles

Metadata for articles is defined at the beginning of the file in the following format:

```markdown
---
sidebar_position: 2
title: My Custom Title
tags: ['tag1', 'tag2', 'tag3']
---
```

Tags are used for SEO purposes, sidebar_position is used to define the order of the article in the sidebar.

### Metadata for sections

Each folder in the `docs` directory represents a section in the sidebar. The section metadata is defined in the `_category_.json` file in the following format:

```json
{
  "label": "RapidPlan Online",
  "position": 1
}
```

Name of folder is used as a label, however, it can be overridden by the label property. Position is used to define the order of the section in the sidebar.

## Style guide

The project uses Markdown lint to enforce a consistent style across the documentation. The rules are defined in the `.markdownlint-cli2.jsonc` file.
Use markdown lint plugin that is available in your IDE to check the style of the document. Fix all yellow and red warnings before creating a pull request.
