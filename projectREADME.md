# calendar-planner-project
In this project, I was given a daily calendar planner website with unfunctional buttons and the inability to store inputs or dynamically change color or show the current date. The first step I took was to fix the save buttons to save data to local storage and then render it so it persisted post refresh. Then I worked on the dynamic color changing based upon whether an event was happening in the current hour, a previous hour, or a future hour by comparing the current time (using dayjs) and the timeslot ids in the html. Then I used dayjs again to display the current date in the header.

here is a screenshot of the deployed application: [!screenshot-of-project](/Assets/images/calendar-project-screenshot.png)
here is a link to the deployed application: 
https://aahmad1123.github.io/calendar-planner-project/