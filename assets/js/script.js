
var btnClick
// date
var gradDate = moment().format("dddd, MMMM Do"); 
document.getElementById("currentDay").innerHTML = gradDate;
// body - work time (9am-5pm) blocks listed downward ex. 8am / 9am / 10am ...
/*
function hourNumber () {
var hourText
hourText = document.getElementById('hour-Number').textContent;
var i;    
for (i = 0; i < hourText.length; i++)

console.log (hourText);
}
*/
var divs = document.querySelectorAll("hour-number");
for(var i = 0; i < divs.length; i++){
  if (divs < currentHour) { 
  }
  console.log(divs);
}

function changeFuture() {
var pastEl = document.getElementsByClassName("past");
for(var i = 0; i < pastEl.length; i++)
{
    document.getElementById(futureEl.item(i)).className = "future";
}
}

function changePast() {
var futureEl = document.getElementsByClassName("future");
for(var i = 0; i < futureEl.length; i++)
{
    document.getElementById(pastEl.item(i)).className = "past";
}
//gets hour of row
//hourNumber();

// save button to right of each time blocks

// color code time blocks - past(grey) / present(red) / future(green)

 // if (hourNumber is < currentHour


// get current time make if then to change color
var today = new Date();
var currentHour = today.getHours();
console.log(currentHour);
// when i click the time blocks i can enter event info



// when i click the save button the event is saved in local storage



// when page is reloaded the event persists
var btnClick = document.getElementById('btnclick');
btnClick.addEventListener('click', );