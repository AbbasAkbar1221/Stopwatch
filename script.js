let display = document.getElementById("display");
let startStopBtn = document.getElementById("startStopBtn");
let resetBtn = document.getElementById("resetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTime() {
  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  const formattedTime =
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;

  document.getElementById("display").textContent = formattedTime;
}

resetBtn.addEventListener("click", () => {
  location.reload();
});

let isRunning = false;
let set;
startStopBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    set = setInterval(updateTime, 1000);
    startStopBtn.textContent = "Stop";
  } else {
    clearInterval(set);
    startStopBtn.textContent = "Start";
  }
});
