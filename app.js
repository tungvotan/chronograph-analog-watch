let realTimeInterval;
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const mainSecondHand = document.querySelector('.main-second-hand');
const subSecondHand = document.querySelector('.sub-second-hand');

// Start the real-time second hand
function startRealTimeSecondHand() {
  const realTime = new Date();
  const ms = realTime.getMilliseconds();
  const roundedSecondResult = Math.round((ms / 1000) * 4) / 4;

  const seconds = realTime.getSeconds();
  const realSecondDegrees = ((seconds + roundedSecondResult) / 60) * 360;
  subSecondHand.style.transform = `rotate(${realSecondDegrees}deg)`;
  const minutes = realTime.getMinutes();
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  const hours = realTime.getHours();
  const hourDegrees = ((hours + minutes / 60) / 12) * 360;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Start the real-time sub-second dial
realTimeInterval = setInterval(() => {
  startRealTimeSecondHand();
}, 250);

const dial = document.querySelector('.dial');
function createHourMarks() {
  for (let i = 0; i < 12; i++) {
    const hourMark = document.createElement('div');
    hourMark.classList.add('hour-mark');

    // Calculate the angle for each hour mark
    const angle = i * 30;

    // Set the rotation and translation for the hour mark
    hourMark.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(0, -132.5px)`;

    dial.appendChild(hourMark);
  }
}

createHourMarks();
