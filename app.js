var hours = 0;
var minutes = 0;
var seconds = 0;
var miliSeconds = 0;

var getDiv = document.getElementById("stopWatch");

var setTime = `${hours} : ${minutes} : ${seconds} : ${miliSeconds}`;

getDiv.innerHTML = setTime;

var interval = null;

function StartTime() {
  var startBtn = document.getElementById("startBtn");
  startBtn.disabled = true;

  interval = setInterval(() => {
    miliSeconds += 1;
    if (miliSeconds >= 100) {
      seconds = seconds + 1;
      miliSeconds = 0;
    }
    if (seconds >= 60) {
      minutes = minutes + 1;
      seconds = 0;
    }
    if (minutes >= 60) {
      hours = hours + 1;
      minutes = 0;
    }
    if (hours >= 24) {
      hours = 0;
    }

    var setTime = `${hours} : ${minutes} : ${seconds} : ${miliSeconds}`;
    getDiv.innerHTML = setTime;
  }, 10);
}

function stopTime() {
  var startBtn = document.getElementById("startBtn");
  startBtn.disabled = false;
  clearInterval(interval);
}

function resetTime() {
  var startBtn = document.getElementById("startBtn");
  startBtn.disabled = false;

  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  miliSeconds = 0;

  getDiv.innerHTML = `${hours} : ${minutes} : ${seconds} : ${miliSeconds}`;
}

// hours = hours < 10 ? "0" + hours : hours;
// minutes = minutes < 10 ? "0" + minutes : minutes;
// seconds = seconds < 10 ? "0" + seconds : seconds;
// miliSeconds = miliSeconds < 10 ? "0" + miliSeconds : miliSeconds;
