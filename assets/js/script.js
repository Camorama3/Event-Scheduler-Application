// Wraps all code that interacts with the DOM in a call to jQuery
$(function () {
    const saveButton = document.getElementById('saveBtn');
    const inputField = document.getElementById('fa-save');

    // saveButton.addEventListener('click', function() {
    //   const inputValue = inputField.value;
    //   if (inputValue.trim()!== '') {
    //     localStorage.setItem('savedEvent', inputValue);
    //     savedAlert.innerHTML = "Saved to Local Storage"
    //   }
    // });

    // This function applies past, present, or future colors
    function applyTimeBlockClasses() {
      // Gets the house using day.js
      const currentHour = dayjs().hour();
  
      // Loops through the time blocks
      document.querySelectorAll('.time-block').forEach(timeBlock => {
        // Extracts the hour from the time block's id
        const blockHour = parseInt(timeBlock.id.split('-')[1]);
  
        // Removes classes to change
        timeBlock.classList.remove('past', 'present', 'future');
  
        // This compares the hour to change
        if (blockHour < currentHour) {
          timeBlock.classList.add('past');
        } else if (blockHour === currentHour) {
          timeBlock.classList.add('present');
        } else {
          timeBlock.classList.add('future');
        }
      });
    }
  
    // Runs the function to update times and colors
    applyTimeBlockClasses();
  
    // Updates classes every minute (optional)
    // setInterval(applyTimeBlockClasses, 60000);
  
    // Displays the current date in the header of the page.
    const currentDateTime = document.getElementById("currentDay");
    const currentDate = new Date();
    currentDateTime.innerHTML = "Today's Date: " + currentDate.toDateString();
  });
  