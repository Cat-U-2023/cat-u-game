const songs = document.querySelector("audio");
const musicButton = document.querySelector(".menu img");
const healthBar = document.getElementById("health");
const hungerBar = document.getElementById("hunger");
const funBar = document.getElementById("fun");
const cleanBar = document.getElementById("clean");
const alert = document.getElementById("close-button");
const windowAlert = document.getElementById("window-notice");
let count = 0;

document.querySelector(".food").addEventListener("click", feedCat);
document.querySelector(".game").addEventListener("click", resetGame);
document.querySelector(".clean").addEventListener("click", resetPoop);

musicButton.addEventListener("click", toggleSound);
songs.volume = 0.2;
function toggleSound() {
  if (count === 0) {
    count = 1;
    songs.play();
    musicButton.src = "img/img-bottons/Musica-On.png";
  } else {
    count = 0;
    songs.pause();
    musicButton.src = "img/img-bottons/Musica-Off.png";
  }
}

alert.addEventListener("click", closeAlert);
function closeAlert() {
  windowAlert.style.display = "none";
}

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
const hungerInterval = 1300;
const funInterval = 1400;
const cleanInterval = 1600;
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

// cambio de imágenes gato

const catImage = document.querySelector(".cat");

function changeStatus() {
  if (hunger <= 70) {
    catImage.src = "img/img-status-cat/cat-hambre.png";
  }
  if (fun <= 50) {
    catImage.src = "img/img-status-cat/cat-enfadado.png";
  }
  if (clean <= 40) {
    catImage.src = "img/img-status-cat/cat-sucio.png";
  }
  if (hunger <= 50 && fun <= 50) {
    catImage.src = "img/img-status-cat/cat-enfado-hambre.png";
  }
  if (hunger <= 40 && clean <= 40) {
    catImage.src = "img/img-status-cat/cat-hambre-sucio.png";
  }
  if (clean <= 40 && fun <= 50) {
    catImage.src = "img/img-status-cat/cat-enfadado-sucio.png";
  }
  if (hunger > 70 && fun > 50 && clean > 40) {
    catImage.src = "img/img-status-cat/cat-normal.png";
  } else if (hunger < 70 && fun < 50 && clean < 40) {
    catImage.src = "img/img-status-cat/cat-pocasalud.png";
  }
}

// cambio img de botones

const buttonFood = document.querySelector(".food");
const buttonBall = document.querySelector(".game");
const buttonSandBox = document.querySelector(".clean");

function changeButton() {
  if (hunger <= 70) {
    buttonFood.src = "img/img-bottons/Btn-food.png";
  } else {
    buttonFood.src = "img/img-bottons/btn-food-2.png";
  }
  if (fun <= 50) {
    buttonBall.src = "img/img-bottons/btn-fun-2.png";
  } else {
    buttonBall.src = "img/img-bottons/btn-fun.png";
  }
  if (clean <= 40) {
    buttonSandBox.src = "img/img-bottons/Clean-3.webp";
  } else {
    buttonSandBox.src = "img/img-bottons/Clean.webp";
  }
}

// bara de vida

function decreaseLife() {
  totalBars = (decreaseHunger() + decreaseFun() + decreaseClean()) / 3;
  totalBars--;
  healthBar.style.width = totalBars + "%";
  changeStatus();
  changeButton();
}

setInterval(decreaseLife, healthInterval);

decreaseLife();
