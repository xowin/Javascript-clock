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
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  const dateElement = document.getElementById('currentDate');
  let position = 0;

  function moveBackground() {
    position -= 1;
    container.style.backgroundPosition = position + 'px 0';

    // Update current date
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();
    dateElement.innerText = `Today is ${day} ${month} ${year}`;

    requestAnimationFrame(moveBackground);
  }

  moveBackground();
});