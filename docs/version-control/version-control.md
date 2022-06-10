---
sidebar_position: 2
sidebar_label: 'Code Version Control'
---

# Code Version Control

## Branching Strategy
We stick as much a possible to the Gitflow Workflow:

- **master branch:** is the one that is deployed to production

- **dev branch:** is the QA branch, it's the one deployed to qa/dev server and contains features that are going to be released to production

- **feature branch:** for each new task a feature branch is created from dev branch and its merged back to dev branch when the work is done

- **bug-fix branch:** (when the fix is going to come with all the features in the normal sprint release), buf-fix branches are created from dev branch and its merged back to dev branch when the work is done

- **hot-fix branch:** (when the fix needs to be populated to production quickly and can't wait to the standard sprint release), hot-fix branches are created from master, when the work is done it's merged back to master and also to dev

## Best Practices

## Pull Request Template
