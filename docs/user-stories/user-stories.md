---
sidebar_position: 1
sidebar_label: 'Writing a User Story'
---

# Writing a user Story

## What is a User Story

User stories is a small piece of work that represents some value to an end user and can be delivered during a sprint. User stories are one of the core elements of the Agile methodology.

User Stories always fit **INVEST** criteria:
- **Independent**: They can be developed in any sequence and changes to one User story don't affect the others.
- **Negotiable**: It's up for the team to decide how to implement them: there is no rigidly fixed workflow.
- **Valuable**: Each User story delivers a detached unit of value to end users.
- **Estimable**: Each User story should be easy to guess how much time the development will take.
- **Small**: It should go through the whole cycle (Designing, Coding, Testing) during one sprint.
- **Testable**: There should be clear acceptance criteria to check whether a User Story is implemented appropriately.

### What is the correct User Story name format

The format should be plain and short:

As a <font color="red">[type of user]</font>, I want <font color="blue">[an action]</font> so that <font color="green">[a benefit/value]</font>

For Example:

- As a <font color="red">passenger</font>, I want to <font color="blue">link the credit card to my profile</font>so that <font color="green">I can pay for a ride faster, easier, and without cash</font>.

- As a <font color="red">driver</font>, I want to <font color="blue">add photos of my car in my profile</font> so that <font color="green">I can attract more users</font>

### How to Write User Stories

User stories seem to be short and easy to write, but most of the time they require a specific workflow that help us deliver the best Stories:

1. Think of the "**Who**"

  Make up the list of your end users. Each story should be valuable to some group of end users. Don't think of users only as external customers, make sure to take into account internal users such as admins, editors, etc.
2. Think of the "**What**"

  Define what functionality each user expects, how he/she is going to interact with the app. Remember to describe an intention, not a feature. Instead of "I want to manage my profile" create several stories like "I want to be able to register", "I want to upload my profile photo". Keep it short. 

3. Think of the "**Why**"

  Define the value that users get after performing an action. The ***why*** will answer how it it affects metrics and KIP's like: Improve UX, increase retention rates. Remember each story should contribute to something to the general goal of the product.

4. Discuss the story with the Team

  After creating the user story always create a discussion with the whole Team working on the project. It will help to understand how it should work and agree on acceptance criteria. Also, will allow to find out the best way to implement User Stories from the tech perspective. In most of this brainstorming sessions the User story will be updated in order to be refined to meet requirements from all perspectives.

## What is a User Story Acceptance Criteria

The acceptance criteria are a set of conditions that are used to confirm when a Story is completed. A user Story can contain one or several Acceptance Criteria depending of number of scenarios that exist for a specific task. 

The ACs are sometimes called **definition of done** because they define the scope and requirements of user stories. 

### The Given/When/Then Acceptance Criteria

The format follows the template:

* Scenario: (explain scenario). 
  * Given <font color="red">(how things begin)</font>
  * when <font color="blue">(Action taken)</font> 
  * then <font color="green">(outcome of taking action)</font>

For Example:

* User story:

  As <font color="red">product manager</font>, I want <font color="blue">to score potential ideas</font>,
  So that <font color="green">I Can decide what include on my product roadmap</font>.

* Acceptance Criteria:

  **Scenario**: The product manager adds potential ideas and ranks the best ideas based on benefit versus cost.

  - Given <font color="red">that I have added two or more ideas and scored them</font>
  - When <font color="blue">I click the Rank button</font>
  - Then <font color="green">ideas are sorted with the top-scoring ideas at the top</font>.

### Why do we need Acceptance Criteria

- Managing expectations
- Defining scope and reducing ambiguity
- Establish testing criteria for QA
- Defending against scope creep mid sprint

## What about EPICS

An Epic is a high level body of work that bands together a group of related Stories.

For Example:

* An Epic: Managing Profiles
  * A Story: As an app user, I want to add profile photos so I get recognized by my followers
  * A Story: As an admin, I want to block photos from users, so that they don't violate community rules.

## Writing a User Story to Work On Jungle

## Writing the User Story from Requirements

## Adding the User Story to the Backlog

## Requesting a Grooming session to discuss the User Story