function realtimeClock() {
  
  var rtClock = new Date();

  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes();
  var seconds = rtClock.getSeconds();

  //AM and PM function
  var amPm = ( hours < 12 ) ? "AM" : "PM";

  //changing hours component to 12 hour format
  hours = (hours > 12) ? hours - 12 : hours;

  //padding hour, minute, and secs with lead zeros
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  //Clock display
  document.getElementById('clock').innerHTML =
    hours + " : " + minutes + " : " + seconds + " " + amPm;
  var t = setTimeout(realtimeClock, 500);
}