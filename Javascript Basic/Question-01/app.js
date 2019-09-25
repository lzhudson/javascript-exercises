
let date = new Date();
let daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day = daysArray[date.getDay()];
let hours = date.getHours();
let sufix = "";
if(hours > 12) {
  sufix = "PM";
  hours -= 12;
} else {
  sufix = "AM";
}
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log("Today: " + day);
console.log("Current time is: " + hours + " " + sufix + " :" + minutes + ":" + seconds);