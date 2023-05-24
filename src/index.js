// crear un div con color que disminuye con el tiempo.

const statusZone = document.querySelector(".status-bar");

statusZone.innerHTML = "<div id='health'></div><div class='bar' id='hunger'></div><div class='bar' id='fun'></div><div class='bar' id='clean'></div>";

const bars = document.getElementsByClassName("bar");

function decrementBars(bars) {
  let width = 100;

  function decrement() {
    width--;
    bars.style.width = width + "%";

    if (width === 0) {
      clearInterval(interval);
    }
  }

  const interval = setInterval(decrement, 1000);

  for (let i = 0; i < bars.length; i++) {
    decrementBars(bars[i]);
  }
}

decrementBars(bars);
