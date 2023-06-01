/* NO DESCOMENTAR ESTE CÓDIGO SI NO ESTÁ DESCOMENTADO EL ARCHIVO DE AUDIO
EN HTML PORQUE ROMPE TODO EL CÓDIGO !!!! */
// const songs = document.querySelector("audio");
// songs.volume = 0.2;

const healthBar = document.getElementById("health");
const hungerBar = document.getElementById("hunger");
const funBar = document.getElementById("fun");
const cleanBar = document.getElementById("clean");

document.querySelector(".food").addEventListener("click", feedCat);
document.querySelector(".game").addEventListener("click", resetGame);
document.querySelector(".clean").addEventListener("click", resetPoop);

let hunger = 100;
let fun = 100;
let clean = 100;

function feedCat() {
  hunger = 100;
  return hunger;
};

function resetGame() {
  fun = 100;
  return fun;
};

function resetPoop() {
  clean = 100;
  return clean;
};

let totalBars;
const hungerInterval = 2000;
const funInterval = 3000;
const cleanInterval = 5000;
const healthInterval = (hungerInterval + funInterval + cleanInterval) / 3;

function decreaseHunger() {
  hunger--;
  hungerBar.style.width = hunger + "%";
  return hunger;
}
setInterval(decreaseHunger, hungerInterval);

function decreaseFun() {
  fun--;
  funBar.style.width = fun + "%";
  return fun;
}
setInterval(decreaseFun, funInterval);

function decreaseClean() {
  clean--;
  cleanBar.style.width = clean + "%";
  return clean;
}
setInterval(decreaseClean, cleanInterval);

// cambio de imágenes

const catImage = document.querySelector(".cat");

function changeStatus() {
  if (hunger <= 70) {
    catImage.src = "img/img-status-cat/Cat-U-Hambriento.png";
  }
  if (fun <= 50) {
    catImage.src = "img/img-status-cat/Cat-U-Enfadado.png";
  }
  if (clean <= 40) {
    catImage.src = "img/img-status-cat/Cat-U-Sucio.png";
  } else if (hunger > 70 &&
             fun > 50 &&
             clean > 40) {
    catImage.src = "img/img-status-cat/Cat-U-Normal.png";
  }
}

// bara de vida

function decreaseLife() {
  totalBars = (decreaseHunger() + decreaseFun() + decreaseClean()) / 3;
  totalBars--;
  healthBar.style.width = totalBars + "%";
  changeStatus();
}

setInterval(decreaseLife, healthInterval);

decreaseLife();
