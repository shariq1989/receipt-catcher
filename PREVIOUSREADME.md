## First Sprint

### Story Point Forecast
14 points

### Forecast Rationale
Since this is our very first sprint, we don’t have any historical reference to go by.  The team decided that the first 
four stories, totaling 14 story points is a good start.

### Sprint Planning Participation
On Wednesday, Nov 4, at 9PM Eastern Standard Time, all team members of Team Strawberry participated in Sprint Planning 
as shown in the Zoom participant list below.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/sprint_planning.png" width="250"
 alt="sprint_planning">

### Kanban Board
The color gray denotes the product backlog, whereas purple or blue (dev tasks) refer to sprint backlog items.

https://miro.com/app/board/o9J_kg1b1Ck=/

### Sprint Burndown Chart
https://miro.com/app/board/o9J_kg1b1Ck=/

### Daily Scrum
On Friday, Nov 6, at 9PM Eastern Standard Time, all team members of Team Strawberry participated in the first daily
scrum as shown in the Zoom participant list below.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/daily_scrum1.png" width="250"
 alt="daily_scrum1.png">

#### What did you do?
##### 11/6

Diah - I shared this Google Document with the rest of the team members.  I created a recurrence meeting on Zoom to host Daily Scrum meetings moving forward.  I started a HTML and CSS file for the simple UI story to upload pictures..

Remi - set up MongoDB instance and provided team members with access to it

Rick - provided Remi with IP address and asked Richard questions about tracking development tasks.

William - worked on configuring MondoDB

Davey - worked on configuring MongoDB instance to our Meteor backend 

##### 11/9

The team today talked about when and who should move completed stories to the Done column.  As a team, we agreed that each assignee should be the one to do that.

Diah - Since our last meeting, I tested the connection to MongoDB.  I plan to confirm with other members of the team about our stories to make sure we’re not duplicating any work.  Then, I plan to continue to work on my story.  I had a blocker about cloning the repo and this blocker was addressed during the daily scrum today.

Remi - Got confirmation of database access - completing story for database configuration. Started researching OCR for next sprint.

Rick - confirmed DB access, reviewed Davey’s PRs, got set up with project, updated README with HW prompts, replaced sample code with receipt upload code

William - Got node, meteor, and webstorm installed. Repository cloned into git. Trying to run project

Davey - Implemented user authentication and got the code reviewed/merged. 

#### What will you do next?
##### 11/6
Diah - will create a simple picture upload page

Remi - will work on the functionality to extract data from receipts

Rick - will work on writing the backend functionality for uploading images

William - will work on implementing the data table for displaying picture upload information  

Davey - will work on implementing user authentication

##### 11/9
Diah - will work on ui for receipt upload

Remi - will work on functionality to extract data from receipts

Rick - complete receipt upload backend functionality, keep adding to README 

William - will work on implementing the data table for displaying picture upload information 

Davey - User auth is now implemented and seems to be working fine. We may want to write our own UI for the forms after we develop the app’s final UI presentation.

#### Impediments
We did not see any impediments that would keep us from meeting the Sprint Goal. We did not develop an impediment removal plan since we did not log any impediments. 

#### Activity
Evidence of us updating our task board

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/activity.png" width="250"
 alt="activity.png">
<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/activity2.png" width="250"
  alt="activity2.png">
    
#### Mob or Paired Programming
Diah and I paired to finish up the UI portion of a story that I wrote the backend for. I navigated her around my code
she filled in the gaps to complete the story. Below is the conversation related to the scheduling of this meeting and 
the code that was written as a result.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/paired_programming.png" width="800"
  alt="paired_programming.png">
  
<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/pair2.png" width="800"
  alt="pair2.png">
  
The entire team mobbed to troubleshoot getting the application running locally on William's computer. William was the 
driver while the rest of us acted as navigators.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/mob.png" width="1000"
  alt="mob.png">
  
#### Sprint Review
https://miro.com/app/board/o9J_kg1b1Ck=/?moveToWidget=3074457351603556576&cot=14

Our stakeholder Tressa Jamil attended as evidenced by the Zoom participant list. She wanted a few features for the next sprint:

1. Centralized place to view all receipts

2. Ability to categorize receipts upon uploads.

The current product backlog already covers the first request, and we added the second request as a new product backlog item.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/review.PNG" width="500"
  alt="review.png">

#### Product Increment
A screenshot of the upload and user authentication functionalities of the app working.

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/increment.png" width="300"
  alt="increment.png">
  
#### Tests
We ran server side and client side tests using meteor. Server tests are run through command line and client tests are
run when the app is loaded in a browser. 

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/client_tests.png" width="300"
  alt="client_tests.png">

<img src="https://github.com/shariq1989/receipt-catcher/blob/main/readme/server_tests.png" width="300"
  alt="server_tests.png">