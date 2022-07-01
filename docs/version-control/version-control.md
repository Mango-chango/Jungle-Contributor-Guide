---
sidebar_position: 2
sidebar_label: 'Contribution Guidelines'
---

# Contribution Guidelines

## Repositories

Jungle's Project Repositories are divided into:

1. [Infrastructure Repository](https://github.com/Mango-chango/Jungle-Infrastructure)
2. [Frontend Mono Repository](https://github.com/Mango-chango/jungle-frontend)
3. [Backend Mono Repository](https://github.com/Mango-chango/jungle-backend)
4. [Documentation/Wiki Repository](https://github.com/Mango-chango/Jungle-Contributor-Guide)

If you don't have access to this repos you can contact you're immediate Manager, instructions to build and start your local environment can be found in each repository README file.

## Branching Strategy

We stick as much a possible to the Gitflow Workflow:

- **master branch:** is the one that is deployed to production

- **dev branch:** is the QA branch, it's the one deployed to qa/dev server and contains features that are going to be released to production

- **feature branch:** for each new task a feature branch is created from dev branch with **name** format like: **[username]/feature-name** and its merged back to dev branch when the work is done

- **bug-fix branch:** (when the fix is going to come with all the features in the normal sprint release), bug-fix branches are created from dev branch and its merged back to dev branch when the work is done

- **hot-fix branch:** (when the fix needs to be populated to production quickly and can't wait to the standard sprint release), hot-fix branches are created from master, when the work is done it's merged back to master and also to dev

## Repository Best Practices

- Write comprehensive and robust tests that cover the changes you've made in your work.
- Follow the appropriate code style standards for the language and framework you're using.
- Write readable code – keep functions small and modular and name variables descriptively.
- Document your code thoroughly.
- Make sure all the existing tests pass.
- User-facing code should support the following browsers:
  - Chrome (Webkit-Blink / 22+)
  - Firefox (Gecko / 28+)
  - Edge (Chromium based / 12+)
  - Opera (Chromium-Blink / 12.1+)
  - Safari (Apple’s Webkit / 7+)
  - IE 11 (Trident)

## Pull Request Guidelines

In order to create a new Pull Request to merge your changes you have to follow this instructions:

1. Make A branch
  
    - Always create a separate branch for each ticket/user-story/issue that you're working on.
  Do not make changes directly to develop or master branch.
2. Push Your Code **ASAP**
  
    - Push your code as soon as you can. Follow the "[early and often](https://www.worklytics.co/blog/commit-early-push-often)" rule".
3. Name your Pull request

    - Name your pull request like this: [**user-story-id**]: **Brief User Story Description**
    - Then **mark the title with a "[WIP]"**
4. Describe your Pull Request
    
  - Use the following format template in your pull request:

  ````
  ### Description
  Issue #

  ### Screenshots (if applicable)

  ### Developer Checklist
  #### About the feature or bug being resolved
  -[ ] I have read the original request and all the comments in the user story
  #### About the code and development practices
  -[ ] I followed our naming conventions to name all variables, classes, fields, tags, etcetera.
  -[ ] I followed the rules we have in place to store files in the right folder in the project structure
  -[ ] I have removed any dead code or development testing artifacts (unused folders, console.log messages, testing/hardcoded values)
  -[ ] All API credentials and third party URLs are located in the right place
  -[ ] I have added the data-testid tag in the DOM elements that need it, according to the specifications
  #### Documentation
  -[ ] I have added the necessary comments to the original ticket with all my questions, concerns, and suggestions
  -[ ] I left proper inline comments when/where necessary so other developers can understand what’s going on
  #### Before merging
  -[ ] I have rebased my branch off the source branch (pull before push)
  -[ ] My commit messages are insightful and relevant
  -[ ] I added the necessary context for the reviewers to be able to understand what is being resolved and how (inside Merge Request)
  #### Testing
  -[ ] I have tested my solution locally in Chrome, Safari, and Edge.
  -[ ] If I'm not able to test in some browser, I have tested with the QA Team.
  -[ ] I have passed my linting checks.
  ````
This Pull request template has to be populated as requested, for Jungle's Frontend Repo this pull request is automatically created whenever a new Pull request is created, you only have to fill the Information and check boxes. 

## Typescript Best Practices

Typescript best coding practices will be enforced by default using [ESlint](https://github.com/typescript-eslint/typescript-eslint) and [Prettier](https://prettier.io/). ESlint is a Library that helps while coding typescript to ensure the best practices are implemented in order to have:
  1. Simplicity
  2. Stability
  3. Focus
  4. Maintainability

At the moment we don't follow any practices like Clean Code, we only expect developers to follow the ESLint and Prettier rules.

## Start Hacking

Go ahead an clone the Repos: 
  -  [Frontend Mono Repository](https://github.com/Mango-chango/jungle-frontend)
  -  [Backend Mono Repository](https://github.com/Mango-chango/jungle-backend)
