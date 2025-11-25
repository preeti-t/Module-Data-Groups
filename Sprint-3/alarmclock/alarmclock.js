let timer = null;
let remaining = 0;

function formatTime(s) {
  const m = String(Math.floor(s / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${m}:${sec}`;
}

function setAlarm() {
  clearInterval(timer);
  audio.pause();
  document.body.style.backgroundColor = "";

  const input = Number(document.getElementById("alarmSet").value) || 0;
  remaining = input;

  const display = document.getElementById("timeRemaining");
  display.innerText = `Time Remaining: ${formatTime(remaining)}`;

  if (remaining === 0) {
    playAlarm();
    return;
  }

  timer = setInterval(() => {
    remaining--;
    display.innerText = `Time Remaining: ${formatTime(remaining)}`;

    if (remaining <= 0) {
      clearInterval(timer);
      playAlarm();
      document.body.style.backgroundColor = "orange";
    }
  }, 1000);
}

function pauseAlarm() {
  clearInterval(timer);
}

function stopAlarm() {
  clearInterval(timer);
  audio.pause();
  audio.currentTime = 0;
  document.body.style.backgroundColor = "";
  document.getElementById("timeRemaining").innerText = "Time Remaining: 00:00";
}
