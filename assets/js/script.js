var currentHour
var btn = document.getElementsByClassName('btn');
var gradDate = moment().format("dddd, MMMM Do");
// populates time on page
document.getElementById("currentDay").innerHTML = gradDate;
// populates text field from local storage
$("#h-8 [id^=textarea]").val(localStorage.getItem("h-8"));
$("#h-9 [id^=textarea]").val(localStorage.getItem("h-9"));
$("#h-10 [id^=textarea]").val(localStorage.getItem("h-10"));
$("#h-11 [id^=textarea]").val(localStorage.getItem("h-11"));
$("#h-12 [id^=textarea]").val(localStorage.getItem("h-12"));
$("#h-13 [id^=textarea]").val(localStorage.getItem("h-14"));
$("#h-14 [id^=textarea]").val(localStorage.getItem("h-14"));
$("#h-15 [id^=textarea]").val(localStorage.getItem("h-15"));
$("#h-16 [id^=textarea]").val(localStorage.getItem("h-16"));
$("#h-17 [id^=textarea]").val(localStorage.getItem("h-17"));

var currentHour = moment().format("H");
// adds 'past' class to all rows on load
$("textarea").addClass("past");

// changes textarea background depending on currentHour
for (let i = 8; i <= 17; i++) {
  var textarea = $('#textarea' + i);
 
if (i > currentHour) {
  $(textarea).removeClass('past').addClass('future');
}
else if (i == currentHour) {
  $(textarea).removeClass('past').addClass('present');
}}

// saves to loacal storage
$(btn).on("click", function () {
// gets value from textarea
  var text = $(this).siblings('.txtarea').val();
  // gets id name
  var id = $(this).parent().attr("id");
// adds id name with textarea strings to local storage
localStorage.setItem(id, text);

})


