// crear un div con color que disminuye con el tiempo.
const hungerBar = document.getElementById("hunger");
const funBar = document.getElementById("fun");
const cleanBar = document.getElementById("clean");
let hunger = 100;
let fun = 100;
let clean = 100;

function decrementHunger() {
  function decrement() {
    hunger--;
    hungerBar.style.width = hunger + "%";
    if (hunger === 0) {
      clearInterval(interval);
    }
  }
  const interval = setInterval(decrement, 2000);
}

function decrementFun() {
  function decrement() {
    fun--;
    funBar.style.width = fun + "%";

    if (fun === 0) {
      clearInterval(interval);
    }
  }

  const interval = setInterval(decrement, 4000);
}

function decrementClean() {
  function decrement() {
    clean--;
    cleanBar.style.width = clean + "%";

    if (clean === 0) {
      clearInterval(interval);
    }
  }

  const interval = setInterval(decrement, 5000);
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
  fun = 100;
};

game.addEventListener("click", resetGame);

//
function resetPoop() {
  clean = 100;
};

poop.addEventListener("click", resetPoop);
