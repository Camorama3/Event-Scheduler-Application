// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
  
  
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
  
    // Function to apply past, present, or future class to time blocks
    function applyTimeBlockClasses() {
      // Get the current hour using day.js
      const currentHour = dayjs().hour();
  
      // Loop through each time block
      document.querySelectorAll('.time-block').forEach(timeBlock => {
        // Extract the hour from the time block's id
        const blockHour = parseInt(timeBlock.id.split('-')[1]);
  
        // Remove all classes to reset
        timeBlock.classList.remove('past', 'present', 'future');
  
        // Compare the block's hour with the current hour
        if (blockHour < currentHour) {
          timeBlock.classList.add('past');
        } else if (blockHour === currentHour) {
          timeBlock.classList.add('present');
        } else {
          timeBlock.classList.add('future');
        }
      });
    }
  
    // Call the function to apply classes when the page loads
    applyTimeBlockClasses();
  
    // Updates classes every minute (optional perk)
    // setInterval(applyTimeBlockClasses, 60000);
  
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // Displays the current date in the header of the page.
    const currentDateTime = document.getElementById("currentDay");
    const currentDate = new Date();
    currentDateTime.innerHTML = "Today's Date: " + currentDate.toDateString();
  });
  