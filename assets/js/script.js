var hour
var currentHour
var today
var storedText
var saveBtn = document.querySelectorAll("button");
//var saveBtn = document.getElementById('fa-save');
var formRow = document.getElementsByClassName('form-control')
//var eventText = document.getElementById('textarea').value;
var hour = document.getElementsByClassName("hour")
var hourId = document.querySelectorAll('[id^=textarea]');
//console.log(hourId);
var gradDate = moment().format("dddd, MMMM Do");
document.getElementById("currentDay").innerHTML = gradDate;

$("textarea").addClass("past");
var currentHour = moment().format("h");

console.log('The current hour is',currentHour );

// gets all 'hour' class elements and makes a node list
var nodeList = document.getElementsByClassName('hour');



change()
function change(){

for (let i = 0; i < nodeList.length; i++) {
  let item = nodeList[i].textContent.replace(/[^0-9]/g,'');

console.log(item);

if(currentHour < item){
  $(formRow).removeClass('past').addClass('future');
  console.log("future");
} else if(currentHour == item){
  $(formRow).removeClass('past').addClass('current');
  console.log("current");
}}}




renderStored();
save();
function save() {
  var eventText = $('[id^=textarea]').val();
  localStorage.setItem('enteredText', eventText);
  console.log(eventText);
}

$(saveBtn).click(function () {
  save();
  //disable();
});

function renderStored() {
  var eventText = $('#textarea').val();
  var storedText = localStorage.getItem('enteredText');
  //eventText.textContent = storedText;
  console.log(storedText)
  $('#textarea').text(storedText);
}
/*
function disable() {
  $("[id^=textarea]:input").prop('readonly', true);
  $("button-addon2").on("click", function (event) {

  })
}

*/

var divs = document.getElementsByTagName('[id^=textarea]');
console.log(divs);
for(var i = 0; i < divs.length; i++){
  //do something to each div like
  divs[i].innerHTML = "something new...";
}

if (hourId < currentHour) {
$(hourId).addClass('future');
document.write("future");
} else {
  $(hourId).addClass('past');
  document.write("past");
} 

