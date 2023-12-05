const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const millisec = document.querySelector(".millisec");

let one, two, three, four;
let isPaused = false;
pause.disabled = true;

const start = () => {
  pause.disabled = false;
  let sec = Number(seconds.innerText);
  let min = Number(minutes.innerText);
  let hou = Number(hour.innerText);
  let ms = Number(millisec.innerText);
  console.log(sec, min, hou, ms);
  one = setInterval(() => {
    if (!isPaused) {
      if (ms === 100) {
        ms = 0;
      }
      ms = ms + 10;
      millisec.innerText = ms;
    }
  }, 100);
  two = setInterval(() => {
    if (!isPaused) {
      if (sec === 60) {
        sec = 0;
      }
      sec++;
      seconds.innerText = sec;
    }
  }, 1000);
  three = setInterval(() => {
    if (!isPaused) {
      if (min == 60) {
        min = 0;
      }
      min++;
      minutes.innerText = min;
    }
  }, 60000);
  four = setInterval(() => {
    if (!isPaused) {
      hou++;
      hour.innerText = hou;
    }
  }, 3600000);
  play.disabled = true;
};

play.addEventListener("click", start);

pause.addEventListener("click", () => {
  if (isPaused) {
    isPaused = false;
  } else {
    isPaused = true;
  }
});

reset.addEventListener("click", () => {
  clearInterval(one);
  clearInterval(two);
  clearInterval(three);
  clearInterval(four);
  hour.innerText = "00";
  seconds.innerText = "00";
  minutes.innerText = "00";
  millisec.innerText = "00";
  play.disabled = false;
  pause.disabled = true;
});
