var today =  moment();
var test = $('.timeblock')
var hour = $('#hour');
var currentDay = $('#currentDay').text(today.format("dddd, MMMM Do"));
var successMsg = $('#saveMessage');
savedTimer = 5;

// Render localstorage values
$('#input1').text(localStorage.getItem('9'));
$('#input2').text(localStorage.getItem('10'));
$('#input3').text(localStorage.getItem('11'));
$('#input4').text(localStorage.getItem('12'));
$('#input5').text(localStorage.getItem('13'));
$('#input6').text(localStorage.getItem('14'));
$('#input7').text(localStorage.getItem('15'));
$('#input8').text(localStorage.getItem('16'));
$('#input9').text(localStorage.getItem('17'));

// Button function 
$( ".saveBtn" ).on( "click", saveValue);
function saveValue(){
    var id = this.parentElement.parentElement.id; // get the sender's id to save it . 
    var val = this.parentElement.parentElement.children[1].children[0].value; // get the value. 
    localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
    savedTimer = 5;
    successMsg.text("Appointment saved to localStorage")
    var hideSaved = setInterval(function () {
      savedTimer--;
          console.log(savedTimer);
          if (savedTimer <= 0) {
            clearInterval(hideSaved);
            successMsg.css('display', 'none') 
            return; 
          }
    }, 1000);
  }




arrayOfHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];


function init() {
  arrayOfHours.forEach(function(el) {
  var rowEl = $('#' + el);
  if(el == today.hour()){
    rowEl.children().eq(1).addClass('present'); 
  } else if(el < today.hour()){
    rowEl.children().eq(1).addClass('past');
  } else if(el > today.hour()){
    rowEl.children().eq(1).addClass('future');
  }
});
}

init();







  ///Create Timeslots
  //create array with the hours
  //loop the array of hours to create the rows
        
    //create TAG for row/hour/input/button 

    //give class to row/hour/input/button 

    //create a dataset to keep the hour in the (row)

    //style timeslots based on the hour comparing to "today.hour()"

  
      //append all tags
  
    // add event listener to add local storage when the save button is clicked in specific timeblock.(Data key "time")