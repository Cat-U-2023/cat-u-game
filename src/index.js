// crear un div con color que disminuye con el tiempo.
const hungerBar = document.getElementById("hunger");
const fun = document.getElementById("fun");
const clean = document.getElementById("clean");
let hunger = 100;
function decrementHunger() {
  function decrement() {
    hunger--;
    hungerBar.style.width = hunger + "%";
    if (hunger === 0) {
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

const friskis = document.querySelector(".food");
const game = document.querySelector(".game");
const poop = document.querySelector(".clean");

function feedCat() {
  hunger = 100;
};

friskis.addEventListener("click", feedCat);

//
function resetGame() {
  return decrementFun();
};

game.addEventListener("click", resetGame);

//
function resetPoop() {
  return decrementClean();
};

poop.addEventListener("click", resetPoop);
