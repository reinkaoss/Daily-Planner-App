var today = moment();
var test = $(".timeblock");
var hour = $("#hour");
var currentDay = $("#currentDay").text(today.format("dddd, MMMM Do"));
var successMsg = $("#saveMessage");
savedTimer = 5;

// Render localstorage values
$("#input1").text(localStorage.getItem("9"));
$("#input2").text(localStorage.getItem("10"));
$("#input3").text(localStorage.getItem("11"));
$("#input4").text(localStorage.getItem("12"));
$("#input5").text(localStorage.getItem("13"));
$("#input6").text(localStorage.getItem("14"));
$("#input7").text(localStorage.getItem("15"));
$("#input8").text(localStorage.getItem("16"));
$("#input9").text(localStorage.getItem("17"));

$(".saveBtn").on("click", function (event) {
  successMsg.text("Appointment saved to localStorage");
  event.preventDefault();
  return;
});

// Button function
$(".saveBtn").on("click", saveValue);
function saveValue() {
  var id = this.parentElement.parentElement.id; // Grab user's id in order to store it 
  var val = this.parentElement.parentElement.children[1].children[0].value; // Gets the value of user's input
  localStorage.setItem(id, val); // This command will overwrite the user's input 
  savedTimer = 5;
// Save message logic
  var hideSaved = setInterval(function () {
    savedTimer--;
    console.log(savedTimer);
    if (savedTimer <= 0) {
      clearInterval(hideSaved);
      successMsg.css("display", "none");
    }
  }, 1000);
  var showSaved = setInterval(function () {
    successMsg.css("display", "flex");
    clearInterval(showSaved);
  }, 1000);
}

arrayOfHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Defining color coding for rows
function init() {
  arrayOfHours.forEach(function (el) {
    var rowEl = $("#" + el);
    if (el == today.hour()) {
      rowEl.children().eq(1).addClass("present");
    } else if (el < today.hour()) {
      rowEl.children().eq(1).addClass("past");
    } else if (el > today.hour()) {
      rowEl.children().eq(1).addClass("future");
    }
  });
}

init();
