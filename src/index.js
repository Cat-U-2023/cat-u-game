import { setGame } from "./modules/pong.js";
import { catJump } from "./modules/cat-jump.js";
const songs = document.querySelector(".music");
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

const pongButton = document.querySelector(".minigame-pong");
const pongGame = document.getElementById("pong");
const closePong = document.getElementById("close-game-pong");
const jumpButton = document.querySelector(".minigame-jump");
const catJumpGame = document.getElementById("cat-jump");
const closeJump = document.getElementById("close-game-jump");

pongButton.addEventListener("click", () => {
  pongGame.style.display = "block";
  pongGame.style.zIndex = 999;
  closePong.style.zIndex = 1000;
  setGame();
});

closePong.addEventListener("click", () => {
  pongGame.style.display = "none";
  pongGame.style.zIndex = -999;
  closePong.style.zIndex = -999;
});

jumpButton.addEventListener("click", () => {
  catJumpGame.style.display = "block";
  catJumpGame.style.zIndex = 999;
  closeJump.style.zIndex = 1000;
  catJump();
});

closeJump.addEventListener("click", () => {
  catJumpGame.style.display = "none";
  catJumpGame.style.zIndex = -999;
  closeJump.style.zIndex = -999;
});

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
const buttonCat = document.querySelector(".cat");
const audioFood = document.querySelector(".sound-food");
const audioToy = document.querySelector(".sound-toy");
const audioSandBox = document.querySelector(".sound-sand-box");
const audioPurr = document.querySelector(".sound-purr");

audioFood.volume = 0.5;
audioToy.volume = 0.4;
audioSandBox.volume = 0.5;
audioPurr.volume = 0.5;

buttonFood.addEventListener("click", () => {
  audioFood.play();
});

buttonBall.addEventListener("click", () => {
  audioToy.play();
});

buttonSandBox.addEventListener("click", () => {
  audioSandBox.play();
});

buttonCat.addEventListener("click", () => {
  if (hunger > 70 && fun > 50 && clean > 40) {
    audioPurr.play();
  }
});

function animationButtons() {
  if (hunger <= 70 && hunger >= 69) {
    buttonFood.src = "img/img-bottons/Glow/btn-food-empty-glow.png";
    buttonFood.classList.add("resize");
  } else {
    buttonFood.classList.remove("resize");
  }
  if (fun <= 50 && fun >= 49) {
    buttonBall.src = "img/img-bottons/Glow/btn-fun-2-glow.png";
    buttonBall.classList.add("resize");
  } else {
    buttonBall.classList.remove("resize");
  }
  if (clean <= 65 && clean >= 64) {
    buttonSandBox.src = "img/img-bottons/Glow/Clean-2-glow.png";
    buttonSandBox.classList.add("resize");
  } else if (clean <= 40 && clean >= 39) {
    buttonSandBox.src = "img/img-bottons/Glow/Clean-3-glow.png";
    buttonSandBox.classList.add("resize");
  } else {
    buttonSandBox.classList.remove("resize");
  }
}

function changeButton() {
  if (hunger <= 70) {
    buttonFood.src = "img/img-bottons/btn-food-empty.png";
  } else {
    buttonFood.src = "img/img-bottons/btn-food-full.png";
  }
  if (fun <= 50) {
    buttonBall.src = "img/img-bottons/btn-fun-2.png";
  } else {
    buttonBall.src = "img/img-bottons/btn-fun.png";
  }
  if (clean <= 65 && clean >= 40) {
    buttonSandBox.src = "img/img-bottons/Clean-2.png";
  } else if (clean <= 40) {
    buttonSandBox.src = "img/img-bottons/Clean-3.png";
  } else {
    buttonSandBox.src = "img/img-bottons/Clean.png";
  }
}

// bara de vida

function decreaseLife() {
  totalBars = (decreaseHunger() + decreaseFun() + decreaseClean()) / 3;
  totalBars--;
  healthBar.style.width = totalBars + "%";
  changeStatus();
  changeButton();
  animationButtons();
}

setInterval(decreaseLife, healthInterval);

decreaseLife();
