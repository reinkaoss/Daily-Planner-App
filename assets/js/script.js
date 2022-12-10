// Nicolas Cage

var today =  moment();
var test = $('.timeblock')
var hour = $('#hour');
var currentDay = $('#currentDay').text(today.format("dddd, MMMM Do"));

// Get the value of the input textarea
var input = $('#input')

$( ".saveBtn" ).on( "click", function() {
    console.log(input.val());
    localStorage.setItem('event', JSON.stringify(input.val()));
    $( ".timeblock1" ).text(input.val());
});


function saveValue(e){
    var id = e.id;  // get the sender's id to save it . 
    var val = e.value; // get the value. 
    localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
}

//get the saved value function - return the value of "v" from localStorage. 
function getSavedValue  (v){
    if (!localStorage.getItem(v)) {
        return "";// You can change this to your defualt value. 
    }
    return localStorage.getItem(v);

// var test = localStorage.setItem('event', JSON.stringify(input.val()));

// $(document).ready(function(){
// //    var storage = localStorage.getItem('event', JSON.stringify(input.val()));
// // console.log(storage);
//     if(storage != null);
//     $( ".timeblock1" ).text(test);
//     }
// );






// $(document).ready(function(){
//     localStorage.setItem('event', JSON.stringify(input.val()));
//     $( ".saveBtn" ).on( "click", function() {
//         $( ".timeblock1" ).text.JSON.stringify(input.val());
//     if(localStorage.getItem("event") == ""){
//         localStorage.getItem("event", input);
//       }else{
//       $(".timeblock1").text(localStorage.setItem("event", " "));
//       }
//     });
// });

    

// $( ".saveBtn" ).on( "click", function() {
// if(input.val() === 12) {
//     console.log("aew");
// }
// // $( ".timeblock" ).addClass( "future" );
// });


arrayOfHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];




//initialize
  //load data from localStorage
  // Data key "time"

  ///Create Timeslots
  //create array with the hours
  //loop the array of hours to create the rows
    
    var titleEl = $('<h1>');// var titleEl = document.createElement("h1");
    //create the tag for the row
    //create the tag for hour
    //create the tag for input 
    //create the tag for button 

    //give class to row 
    //give class to hour...

    //create a dataset in the element to keep the hour in the Row

    //style timeslots based on the hour comparing to "today.hour()"
    // if(arrayofHours[i] == today.hour()){
    //   //timeblockelement.addClass('past');
    // } else if(arrayofHours[i] == today.hour()){
    //   //timeblockelement.addClass('present');
    // } else if(arrayofHours[i] == today.hour()){
    //   //timeblockelement.addClass('future');
    // }

    //append all tags


  // Save the event in local storage when the save button is clicked in that timeblock.
  // Data key "time"
