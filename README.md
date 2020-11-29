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
For anyone who wants to know exactly where their money is going, Receipt Catcher is a mobile application that keeps track of your purchases anytime anywhere.

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
We pretended as if we could only complete one story from the backlog and decided which story that would be. We continued this process with the rest of the stories in the backlog until the backlog was fully sorted and ordered. During this process we considered the value each story would bring to the stakeholders as well as dependencies between stories.

### Definition of Ready
For each PBI it must have:

- A size estimate

- Summary of work to be done

- Acceptance criteria

- Prerequisites defined and completed

- A title

### Relative-size Estimating
We used Affinity Group Sizing to estimate the size of the stories and pointed them using the number sequence provided in the Miro Planning Poker tool.
Everyone in the Strawberry team is a development team member so we were all involved in estimating. 

## First Sprint
Details of First Sprint can be found in PREVIOUSREADME.md file

## Second Sprint

### Sprint Planning
The forecast for the second sprint is 20 story points.

### Forecast Rationale
The forecast was an increase from the previous sprint because of a few reasons.  First, we were able to finish the initial setup of the project quicker than our expectation, which allowed us to start thinking about the code and how we are going to accomplish the user stories.  Second, team members were able to complete high story points in a short amount of time during the first sprint.  Thus, at the second Sprint Planning session, the team felt confident that they would be able to achieve higher story points in this second sprint.

### Sprint Planning Event (4 points)
On Sunday, Nov 15, the Development Team met and participated in the Sprint Planning event.  
1. We pulled stories from the Product Backlog into the Sprint Backlog. This is visible in Miro board where we’ve differentiated between the 2 backlogs using a deck card as a separator.  
2. The stories that were pulled to the Sprint backlog were representative of the Sprint Review Next Steps slide as seen in the screenshot below.  These stories were aligned with our stakeholders requests.  
3. The aggregate size of the stories is 20 points, which is equivalent to our forecast this sprint.  
4. Only Development Team members participated in this activity.  As evident in the log of Miro board below, during the time of this event, several members of the Development Team were active on Miro board.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/next%20steps.png" width="250"
 alt="next%20steps.png">
 
 <img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/miro%20log.png" width="250"
 alt="miro%20log.png">
 
 ### Backlog Size (1 point)
 Each backlog item is less than half of the sprint's forecast.  The smallest item is 1 story point, and the biggest item is 7 story points.
 https://miro.com/app/board/o9J_kg1b1Ck=/
 
 ### User Story Decomposition (2 points)
 We decided to use <span style="color:purple">*a purple card*</span> to represent a Story and <span style="color:blue">*a blue card*</span> to represent a Dev Task.  Additionally, Dev Task is prefixed with the word "Dev Task" in front of it.  Using this color rule, we can easily identify tasks from stories.  A Story may have more than 1 Dev Task.  Here are some example of a Story and some Dev Task underneath it.
 
 <img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/story_devtasks1.png" width="250"
 alt="story_devtasks1.png">
 
 <img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/story_devtasks2.png" width="250"
 alt="story_devtasks2.png">
 
 ### Sprint Backlog Format and Accessibility (3 points)
 1. Our Sprint Backlog is represented in a Kanban board in Miro.
 2. The URL to Miro is: https://miro.com/app/board/o9J_kg1b1Ck=/
 3. Richard helped set the board and by virtue of access should be able to view the URL above.
 
 ### Sprint Burndown Chart (6 points)
 1. We have a Sprint Burndown Chart located above the image of a Strawberry on our Miro board: https://miro.com/app/board/o9J_kg1b1Ck=/
 2. The x-axis represents date of the sprint by day.
 3. The y-axis represents story points remaining to be done.
 4. We tried our best to keep a linear curve descending from left to right, however, in the middle of the Sprint, we realized that we did not incorporate CI/CD User Stories to the Sprint as required by the grading rubric.  This is why you will see a spike in the chart about at around mid-sprint.
 5. The URL to the burndown chart is: https://miro.com/app/board/o9J_kg1b1Ck=/
 6. Richard helped set the board and by virtue of access should be able to view the URL above.
 
 ### Daily Scrum (1 point)
 On Nov 24, the Development Team conducted a Daily Scrum as shown below:
 
 <img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/daily_scrum_11_24.png" width="250"
 alt="daily_scrum_11_24.png">
 
### Daily Scrum - What did you do?
Rick: Deployed application to a Linode server. Sent messages to Richard regarding handling project requirements vs stakeholder requests, and resubmitting homework.
Diah: Kept up with all thread on Slack, Re-did Sprint burndown chart, Calculated the Rubric for Project Part 2 and started gathering evidence to resubmit.
Remi: Worked on meta-data upload. Files now are uploaded to the database with meta-data. (Handles the create function from CRUD)
Will: Worked on meteor and Vue learning and playing around with the current code. 

### Daily Scrum - What will you do?
Rick: I will start working on integrating CI/CD for automated testing and builds
Remi: I will help in writing and running unit tests for TDD.
Diah: Create slides for Sprint Review.  Continue to gather evidence to resubmit.  Continue to fill in Project Part 3 rubric.

### Daily Scrum - Any impediments?

### Update Sprint Task Board and Burndown Chart (2 points)
Different members updated the Kanban board on different days as they progress with the assigned stories as seen in the log below:

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/daily_log.png" width="250" alt="daily_log.png">
 
### Pair- or Mob-Programming
On Monday, Nov 16, Diah, William, and Davey did a mob programming of the UI prototype design.  Diah was sharing her screen and was acting as the Driver while William and Davey were acting as the Navigators.  After the meeting was over, we shared the results of the prototype in the Slack channel for the rest of the team members to see. 

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/mob_11_16.png" width="250" alt="mob_11_16.png">

### Test-Driven Development

### Sprint Review:

### Product Increment

### Stakeholder Presence

### Continuous Integration

### Continuous Delivery

### Sprint Retrospective
