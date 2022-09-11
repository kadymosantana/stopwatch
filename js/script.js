const tempos = document.querySelectorAll("[data-number]");
const buttonStart = document.querySelector(".start");
const buttonStop = document.querySelector(".stop");
const buttonReset = document.querySelector(".reset");

let hours = 0;
let minutes = 0;
let seconds = 0;

function cronometro() {

  const start = setInterval(() => {

    buttonStart.innerText = "INICIAR";
    buttonStart.setAttribute("disabled", "disabled");

    seconds++;

    if (seconds === 59) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 59) {
      minutes = 0;
      hours++;
    }

    tempos[0].innerText = hours;
    tempos[1].innerText = minutes;
    tempos[2].innerText = seconds;

    if (hours < 10) tempos[0].innerText = `0${hours}`;
    if (minutes < 10) tempos[1].innerText = `0${minutes}`;
    if (seconds < 10) tempos[2].innerText = `0${seconds}`;
  }, 1000);

  buttonStop.addEventListener("click", () => {
    clearInterval(start);
    this.setAttribute("disabled", "disabled");
    buttonStart.removeAttribute("disabled");
    buttonStart.innerText = "RETOMAR";
  });

  buttonReset.addEventListener("click", () => {
    clearInterval(start);
    buttonStart.removeAttribute("disabled");
    buttonStart.innerText = "INICIAR";
    tempos.forEach((tempo) => (tempo.innerText = "00"));

    seconds = 0;
    minutes = 0;
    hours = 0;
  });
}

buttonStart.addEventListener("click", cronometro);
