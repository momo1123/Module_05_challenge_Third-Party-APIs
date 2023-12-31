

// ## Acceptance Criteria

// ```md
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
// DONE--

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```
// const dayjs = require('dayjs');
function clicking(){
  document.addEventListener('click', save_option);
}
const save_option = $('#save_option');
// Function that gets the current time.
function current_time(){
  const nowTime = dayjs().format('hh:mm:ss a');
  console.log(nowTime);
  return nowTime;
}
function click_event (){
  save_option.text('hello');
}
click_event(clicking);


//import dayjs from 'dayjs' // ES 2015
// dayjs().format()
current_time();
// Get all the textarea tags and chagne the color to desired color
function get_DivHour(){
  // var hours = document.querySelectorAll("div.past");
  // console.log(typeof(hours[0].classList[2]))
  // // hours[0].classList[2] = 'present'
  // console.log("value was chagned to",hours[0].classList[2])
  // hours.classList.remove('div.past');
  // hours.classList.add('present');
  var hours = document.getElementById('hour-9');
  hours.classList.remove('past')
  hours.classList.add('present');

  console.log(hours);
}
get_DivHour();



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });
