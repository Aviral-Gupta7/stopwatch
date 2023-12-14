const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");
const btnReset = document.querySelector(".reset");
const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const millisec = document.querySelector(".millisec");

millisec.innerHTML = "00";
second.innerHTML = "00";
minutes.innerHTML = "00";
hour.innerHTML = "00";

let interval;
let sec = 0;
let ms = 0;
let min = 0;
let hr = 0;

btnPlay.onclick = () => {
  clearInterval(interval);
  interval = setInterval(start, 10);
};

btnPause.onclick = () => {
  clearInterval(interval);
};

btnReset.onclick = () => {
  clearInterval(interval);
  sec = 0;
  ms = 0;
  min = 0;
  hr = 0;
  sec;
  millisec.innerHTML = "00";
  second.innerHTML = "00";
  minutes.innerHTML = "00";
  hour.innerHTML = "00";
};

const start = () => {
  ms++;

  if (ms < 9) {
    millisec.innerHTML = "0" + ms;
  }

  if (ms > 9) {
    millisec.innerHTML = ms;
  }

  if (ms > 99) {
    sec++;
    second.innerHTML = "0" + sec;
    ms = 0;
    millisec.innerHTML = "0" + 0;
  }

  if (sec > 9) {
    second.innerHTML = sec;
  }

  if (sec > 58) {
    min++;
    minutes.innerHTML = min;
    sec = 0;
    second.innerHTML = sec;
  }
  if (min > 9) {
    minutes.innerHTML = min;
  }

  if (min > 58) {
    hr++;
    hour.innerHTML = "0" + hr;
    min = 0;
    minutes.innerHTML = min;
  }
  if (hr > 9) {
    hour.innerHTML = hr;
  }
};
