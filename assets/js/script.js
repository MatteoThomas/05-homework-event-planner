var hour
var currentHour
var today
var storedText
var saveBtn = document.querySelectorAll("button");
//var saveBtn = document.getElementById('fa-save');
var formRow = document.getElementsByClassName('form-control')
//var eventText = document.getElementById('textarea').value;
var hour = document.getElementsByClassName("hour")

var $hourIds

var gradDate = moment().format("dddd, MMMM Do");
document.getElementById("currentDay").innerHTML = gradDate;

var currentHour = moment().format("h");
//var today = new Date();
console.log(currentHour, 'current hour');



renderStored();

function save() {
  var eventText = $('[id^=textarea]').val();
  localStorage.setItem('enteredText', eventText);
  console.log(eventText);
}

$(saveBtn).click(function() {
  save();
  disable();
});

function renderStored() {
  var eventText = $('#textarea').val();
  var storedText = localStorage.getItem('enteredText');
  //eventText.textContent = storedText;
  console.log(storedText)
  $('#textarea').text(storedText);
}

function disable() {
  $("[id^=textarea]:input").prop('readonly', true);
  $("button-addon2").on("click", function (event) {
  
})}


var css;
var id = $('[id^=textarea]').attr('id').replace(/textarea/, '');
console.log(id);
switch(id) {
  case currentHour == row:
    css = $(formRow).addClass("present");
    break;
    case currentHour > row:
    css = $(formRow).addClass("past");
    break;
    case currentHour < row:
      css = $(formRow).addClass("future");
    break;

}




