// crear un div con color que disminuye con el tiempo.

const statusZone = document.querySelector(".status-bar");

statusZone.innerHTML = "<div id='health'></div><div class='bar' id='hunger'></div><div class='bar' id='fun'></div><div class='bar' id='clean'></div>";

const hunger = document.getElementById("hunger");
const fun = document.getElementById("fun");
const clean = document.getElementById("clean");

function decrementHunger() {
  let width = 100;

  function decrement() {
    width--;
    hunger.style.width = width + "%";

    if (width === 0) {
      clearInterval(interval);
    }
  }

  const interval = setInterval(decrement, 1000);
}

function decrementFun() {
  let width = 100;

  function decrement() {
    width--;
    fun.style.width = width + "%";

    if (width === 0) {
      clearInterval(interval);
    }
  }

  const interval = setInterval(decrement, 2000);
}

function decrementClean() {
  let width = 100;

  function decrement() {
    width--;
    clean.style.width = width + "%";

    if (width === 0) {
      clearInterval(interval);
    }
  }

  const interval = setInterval(decrement, 3000);
}

decrementHunger();
decrementFun();
decrementClean();
