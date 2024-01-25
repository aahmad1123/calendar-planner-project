// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
var saveButton = $('.saveBtn');
var hour9 = localStorage.getItem('hour9')
var textEl = $('#hour-9')
hour9= textEl.children(".description").val() /*this is correctly targetting the text area line in the html but is not returning the value put inside the text area"*/

saveButton.on("click", function (){
  var divID = $(this).parent().attr("id")
  var textValue = $(this).siblings(".description").val()
  localStorage.setItem(divID, textValue)
});
$('#09 .description').val(localStorage.getItem('09'))
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'))
$('#12 .description').val(localStorage.getItem('12'))
$('#13 .description').val(localStorage.getItem('13'))
$('#14 .description').val(localStorage.getItem('14'))
$('#15 .description').val(localStorage.getItem('15'))
$('#16 .description').val(localStorage.getItem('16'))
$('#17 .description').val(localStorage.getItem('17'))




  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  var timeSlot = $('.time-block');
  var hour = dayjs();
  console.log(hour.format('H'))

timeSlot.each(function(){
  var timeBlock = $(this).attr("id")
  if(hour.format("H") < timeBlock){
    $(this).addClass("past");
  } else if(hour.format('H') == timeBlock){
      $(this).addClass("present");
    }else if(hour.format('H') > timeBlock){
      $(this).addClass("future");
    }
  
})


  


dateEl= $('#currentDay')
today = dayjs()
dateEl.text(today.format('MMM D, YYYY'));


