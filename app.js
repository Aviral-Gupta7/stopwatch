const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const millisec = document.querySelector(".millisec");

let one;
let isPaused = false;
pause.disabled = true;

const start = () => {
  play.disabled = true;
  pause.disabled = false;
  let sec = Number(seconds.innerText);
  let min = Number(minutes.innerText);
  let hou = Number(hour.innerText);
  let ms = Number(millisec.innerText);
  console.log(sec, min, hou, ms);
  one = setInterval(() => {
    if (!isPaused) {
      if (ms == 100) {
        ms = 0;
        sec++;
        seconds.innerText = sec;
      }
      if (sec == 60) {
        sec = 0;
        min++;
        seconds.innerText = sec;
        minutes.innerText = min;
      }
      if (min == 60) {
        min = 0;
        hour++;
        minutes.innerText = min;
        hour.innerText = hou;
      }
      ms = ms + 1;
      millisec.innerText = ms;
    }
  }, 10);
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
  hour.innerText = "00";
  seconds.innerText = "00";
  minutes.innerText = "00";
  millisec.innerText = "00";
  play.disabled = false;
  pause.disabled = true;
  isPaused = false;
});
