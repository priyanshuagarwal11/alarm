const clock = document.getElementById("clock");
const alarmTimeInput = document.getElementById("alarmTime");
const statusText = document.getElementById("status");

let alarmTime = null;
let alarmSet = false;

// Update clock every second
setInterval(() => {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const currentTime = `${hours}:${minutes}:${seconds}`;
    clock.innerText = currentTime;

    if (alarmSet && alarmTime === `${hours}:${minutes}`) {
        alert("⏰ Alarm Ringing!");
        alarmSet = false;
        statusText.innerText = "";
    }
}, 1000);

function setAlarm() {
    if (alarmTimeInput.value === "") {
        alert("Please select alarm time");
        return;
    }

    alarmTime = alarmTimeInput.value;
    alarmSet = true;
    statusText.innerText = `Alarm set for ${alarmTime}`;
}
