let date = new Date();
let daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day = daysArray[date.getDay()];
let hours = date.getHours();
let sufix = (hours > 12) ? "PM" : "AM";
hours = (hours > 12) ? hours -= 12 : hours;
if(hours === 0 && sufix == "PM") {
  if(minutes === 0 && seconds === 0) {
    hours = 12;
    sufix = ' Noon';
  } else {
    hours = 12;
    sufix = "PM";
  }
}
if(hours === 0 && sufix === "PM") {
  if(minutes === 0 && seconds === 0) {
    hours = 12;
    sufix = " Midnight";
  } else {
    hours = 12;
    sufix = " AM"
  }
}
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log("Today: " + day);
console.log("Current time is: " + hours + " " + sufix + " :" + minutes + ":" + seconds);