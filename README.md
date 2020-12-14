## CSCI E-71 Agile Software Development Project

### Team Name

Strawberry :strawberry:

### Slack Channel

team-strawberry - https://agilesoftwarecourse.slack.com/archives/C01E62UHTSL

### Team Members

Davey Wilkie - Dev Team Member

Diah Nasution - Scrum Master, Dev Team Member

Remi Oldham - Dev Team Member

Shariq (Rick) Jamil - Product Owner, Dev Team Member

William Tang - Dev Team Member

### Product Name

Receipt Catcher

### Far Vision

Receipt Catcher offers a peace of mind for your purchasing habit.

### Near Vision

For anyone who wants to know exactly where their money is going, Receipt Catcher is a mobile application that keeps
track of your purchases anytime anywhere.

### Stakeholders

Shopper who needs to keep track of receipts

Member of household/business interested in optimizing personal finance

Investor / venture capitalists

Developer building the Receipt Catcher application

### Real Stakeholder

Tressa Jamil, Shopper

### User Persona

| Name          | Tressa Jamil                                                |
| ------------- | ------------------------------------------------------------|
| Role          | Shopper                                                     |
| Age           | 32                                                          |
| Gender        | Female                                                      |
| Education     | BSc Elementary Education in Special Education               |
| Work          | Pastor                                                      |
| Location      | Colorado Springs, CO                                        |
| Goals         | Store receipts digitally                                    |
|               | Quickly find a receipt in order to make a product return    |
|               | Shop smarter                                                |
| Frustrations  | Storing paper receipts                                      |
|               | Finding the receipt for a particular purchase               |
|               | Impulsive purchases                                         |
|               | Going to the store without a plan                           |
| Motivations   | Making healthier choices for herself and her family         |
|               | Being frugal                                                |
|               | Going to the grocery store with a well-curated shopping list|

### Product Backlog

https://miro.com/app/board/o9J_kg1b1Ck=/

### Order of Product Backlog rationale

We pretended as if we could only complete one story from the backlog and decided which story that would be. We continued
this process with the rest of the stories in the backlog until the backlog was fully sorted and ordered. During this
process we considered the value each story would bring to the stakeholders as well as dependencies between stories.

### Definition of Ready

For each PBI it must have:

- A size estimate

- Summary of work to be done

- Acceptance criteria

- Prerequisites defined and completed

- A title

### Relative-size Estimating

We used Affinity Group Sizing to estimate the size of the stories and pointed them using the number sequence provided in
the Miro Planning Poker tool. Everyone in the Strawberry team is a development team member so we were all involved in
estimating.

## First Sprint

Details of First Sprint can be found
in [PREVIOUSREADME.md](https://github.com/shariq1989/receipt-catcher/blob/main/PREVIOUSREADME.md) file

## Second Sprint

Details of Second Sprint can be found
in [PREVIOUSREADME.md](https://github.com/shariq1989/receipt-catcher/blob/main/PREVIOUSREADME.md) file

## Third Sprint

### Sprint Planning (1 point)

The forecast for the third sprint is 19 story points.

### Forecast Rationale (1 point)

We forecasted 19 story points because:
The team felt confident that they would be able to complete this number. Another consideration was that there was at
least one story that was carried over from the previous sprint, which was almost completed.

### Sprint Planning Event (4 points)

Evidence can be found in
the [recording](https://drive.google.com/file/d/1u46mmszBPSqQ_VTpNPVDd0bqHzhT55BK/view?usp=sharing) starting at minute
02:00.

### Backlog Size (1 story)

Evidence can be found in
the [recording](https://drive.google.com/file/d/1u46mmszBPSqQ_VTpNPVDd0bqHzhT55BK/view?usp=sharing) starting at minute
03:00.

### User Story Decomposition (2 points)

Evidence can be found in
the [recording](https://drive.google.com/file/d/1u46mmszBPSqQ_VTpNPVDd0bqHzhT55BK/view?usp=sharing) starting at minute
16:00.

### Sprint Backlog Format and Accessibility (3 points)

1. Our Sprint Backlog is represented in a Kanban board in Miro.
2. The URL to Miro is: https://miro.com/app/board/o9J_kg1b1Ck=/
3. Richard helped set the board and by virtue of access should be able to view the URL above.

### Sprint Burndown Chart (6 points)

1. We have a Sprint Burndown Chart located above the image of a Strawberry on our Miro
   board: https://miro.com/app/board/o9J_kg1b1Ck=/
2. The x-axis represents dates of the sprint by day.
3. The y-axis represents story points remaining to be done.
4. A linear curve is present descending from left to right.
5. The URL to the burndown chart is: https://miro.com/app/board/o9J_kg1b1Ck=/
6. Richard helped set the board and by virtue of access should be able to view the URL above.

### Daily Scrum (1 point)

On December 9 at the usual 9pm EST scheduled time, the team met for a Daily Scrum ceremony. The order of speakers was:
Diah, William, Rick, Remi, Davey.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/dec9_daily_scrum.png" width="250"
alt="dec9_daily_scrum.png">

The meeting sparked lots of follow-up discussion on the Slack channel.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/dec9_after_scrum.png" width="250"
alt="dec9_after_scrum.png">

### Daily Scrum - What did you do? (5 points)

- Diah:  Since last meeting, I worked on the new grading rubric, shared the recording of Sprint Planning with Richard
  and Anu via Google Drive.

- William: Worked on setting up the table that displays the Receipts

- Rick: Worked on getting the delete receipt functionality working

- Remi: I worked on the router implementation and completed that story.

- Davey: I installed and configured Element UI, a component framework that we’re going to use to improve the look and
  feel of our front end.

### Daily Scrum - What will you do? (5 points)

- Diah: Until our next meeting, I will continue to work on the grading rubric, participate in all mob-programming
  activity with the team, and finalize the Sprint Review slide deck for the Sprint Review meeting with the stakeholder
  on Friday.

- William: Will be working on the sorting story

- Rick: I will work on visualizing images from the database

- Remi: I will be moving forward with the Updates story.

- Davey: Began work on overhauling the UI, moving as much of our display as possible into Element UI components.

### Daily Scrum - Any impediments? (3 points)

Remi: I had a blocker around the routing story that was causing 404 errors to be thrown as the router sent the browser
to unknown pages. After looking up documentation and comparing vue-router against Express, which I’m more familiar with,
I found that the error was a simple typo that caused the receipt._id value to not be properly interpreted by the router.

### Update Sprint Task Board and Burndown Chart (2 points)

On Dec 9, we discovered that one of the Dev Task that belong to UI Enhancements stories was not needed, thus we
repurposed it to capture a newly found Story that Remi worked on, which was routing. The remaining Dev Task was edited
to represent the work by Davey a little bit better, which is adding a header to the web app.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/miro_log_sprint3.png" width="250"
alt="miro_log_sprint3.png">

We also updated the Sprint Burndown Chart frequently. This screenshot was taken on Dec 9, which shows that we had 14
points remaining in the sprint to be completed.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/dec9_burn.png" width="250"
alt="dec9_burn.png">

Later, we updated the chart as seen below:

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/dec13_burn.png" width="250"
alt="dec13_burn.png">

### Pair- or Mob-Programming (5 points)

On Dec 2, the team mob programmed. All 5 developers participated in this activity as evident in the recording below:
[https://drive.google.com/file/d/10LIQPd0qlQPxlsXeZkD4m9dnRtgc3Pe5/view?usp=sharing]

### Test-Driven Development (10 points)

#### This sprint we added 11 new tests.

We added a new client side test (router is routing to root)
for our new router functionality

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/p4/client_test.png" width="600" alt="client_tests.png">

We added nine new server side tests. These cover various ways in which we use the Meteor-Files library

- insert pdf
- FilesCollection isImage function
- FilesCollection isPDF function

We added a few to test mongoDB functionality

- delete image
- update receipt

There are also new tests that confirm the robustness of a function we wrote.

- runFetch provided no parameters
- runFetch provided a single parameter
- runFetch provided multiple parameters runFetch returns no results
- runFetch returns no results

Lastly, we added a BDD test using the "Given...When...That" format.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/p4/bdd_test.png" width="400" alt="bdd_test.png">

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/p4/server_test.png" width="600" alt="server_tests.png">

### Continuous Integration (5 points)

1. We have a Continuous Integration system running.
2. We only work on the main/trunk/master together - there are no long-lived code branches.
3. The CI system automatically builds our code every time we push to main/trunk/master.
4. The CI system automatically executes all our tests every time it builds the code.
5. Evidence that CI system exists and behaves properly:

https://app.circleci.com/pipelines/github/shariq1989/receipt-catcher

Steps that are run as a part of our CI. They run automatically when code is pushed to main

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/CI.png" width="600" alt="CI.png">

Tests are run automatically in the server_tests job

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/CI2.png" width="600" alt="CI2.png">

CI and CD running automatically for every push to main

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/p4/cd.png" width="600" alt="cicd.png">

### Continuous Deployment (5 points)

1. We have a Continuous Delivery system running.
2. When the build is "green", the CD system deploys our software to production environment ("Production");
3. when the build is "red", the CD doesn't alter Production.
4. The CD system executes additional tests of our software in Production to ensure Production is up and running
   successfully after deployment.
5. Evidence that CD system exists and behaves properly:

#### Evidence of CD deployments working

We added a new UI components library to improve the look of our application. Here is what it looked like on the server
before the addition.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/red1.png" width="300" alt="red1.png">

These code pushes were related to the UI updates. The new library was automatically installed by the CI/CD system based
on changes to the package.json file.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/p4/ui_update_cd.png" width="600" alt="ui.png">

In the same production instance, the UI is now updated.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/p4/updated_ui.png" width="300" alt="new_ui.png">

Build deployment steps including verification.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/CD.png" width="600" alt="CD.png">

CI and CD stages run for green builds

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/p4/cd.png" width="600" alt="cicd.png">

Deploy job was not initiated because I added a failing test

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/FAILCD.png" width="600" alt="FAILCD.png">

### Sprint Retrospective (4 points)

We conducted a sprint retrospective that was attended by the entire team on Monday Dec 7 during one of the in-class
activity. We decided as a team that we need to improve at test driven development. This would lead to increased test
coverage and thus, a more reliable application. In order to achieve this, we decided to add the following changes to our
development process.

1. Having unit and/or integration tests written before the middle of the sprint and passed before the end of sprint
2. Adding unit and/or integration tests to the acceptance criteria for each user story
3. Adding unit and/or integration testing to the Definition of Done
4. Adding passed unit and/or integration tests to the Definition of Ready

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/straw_retro.png" width="600"
alt="straw_retro.png">

### Sprint Review (1 point)

The Sprint Review will be conducted on Dec 14 as per class plan.

### Sprint Review Length (1 point)

The Sprint Review for Team Strawberry is 10 minutes on the dot because we are awesome like that!

### Scrum Master Facilitation (2 points)

The Scrum Master holds a stopwatch in their hand and cues the Product Owner to start. They also prompt the PO and
Development Team at the perfect moments.

### Sprint Review Opening(4 points)

The PO, as rehearsed, stated the purpose of the presentation, welcomed the stakeholders, thanked their attendance, and
was excited to record their feedback on the product increment.

### Explain Product Far and Near Vision (3 points)

On Slide 4, the PO stated the product’s far and near vision. The slides are complemented with helpful visualization to
facilitate stakeholders ability to follow along.

### Describe Stakeholders and User Personas (5 points)

The PO described a list of stakeholders and identified various user personas. Similarly, posters and images were used to
convey the message.

### Demo of Product Increment by Development Team (4 points)

The Development Team demonstrated the product increment by taking the audience through a number of completed backlog
items as seen on the table of slides 6. The order of the demonstration is deliberate to capture what the end user might
do in real life.

### Solicit Feedback from Stakeholders (3 points)

At the end of the demonstration, the PO moved on to the next slide for Voice of the Customer, where they offered
stakeholders to give feedback. Questions such as “What would you like to see next time?” or “Do you have any preference
on the next desired functionality of this product?” were mentioned.

### Future Plans (1 point)

As seen in the powerpoint presentation, the PO took the audience to a trip of the future state of the product.

### Sprint Review Wrap Up (3 points)

The PO wrapped up the sprint review with a forecast of next sprint deliverables. As what good presenters do, the PO
summarized the meeting and thanked everyone in the audience.

### Sprint Review Rehearsal (1 point)

On Dec 12, the Development Team gathered to rehearse the Sprint Review. We went over the power point slide. The SM kept
the timer and paused every time the team mentioned things that were not part of the Sprint Review.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/rehearse1.png" width="250"
alt="rehearse1.png">

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/rehearse2.png" width="250"
alt="rehearse2.png">

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/rehearse3.png" width="250"
alt="rehearse3.png">
