const catPlayer = document.querySelector(".character");
const mummy = document.querySelector(".obstacle");
const floor = document.querySelector(".floor");
const bg = document.querySelector(".background-egypt");
const gameOver = document.querySelector(".game-over");
const gameplayInfo = document.querySelector(".gameplay-info");

export function catJump() {
  document.addEventListener("keydown", (start) => {
    if (start.code === "Space") {
      gameplayInfo.style.display = "none";
      gameOver.style.display = "none";
      catPlayer.classList.add("cat-running");
      mummy.classList.add("obstacle-moving");
      bg.style.animation = "animated-background 80s linear infinite";
      floor.style.animation = "animated-floor 18s linear infinite";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e === TouchEvent) {
      if (catPlayer.classList !== "cat cat-jump") {
        catPlayer.classList.add("cat-jump");
      }
      setTimeout(() => {
        catPlayer.classList.remove("cat-jump");
      }, 700);
    }
  });

  const endGame = () => {
    setInterval(() => {
      const mummyLeft = parseInt(getComputedStyle(mummy).getPropertyValue("left"));
      const catBottom = parseInt(getComputedStyle(catPlayer).getPropertyValue("bottom"));
      // detect collision
      const catRight = (window.innerWidth * 16) / 100;
      const catLeft = (window.innerWidth * 2) / 100;
      const catLimit = (window.innerHeight * 15) / 100;
      if (mummyLeft <= catRight && mummyLeft >= catLeft && catBottom <= catLimit) {
        // collision
        gameplayInfo.style.display = "block";
        gameOver.style.display = "block";
        catPlayer.classList.remove("cat-running");
        mummy.classList.remove("obstacle-moving");
        bg.style.animation = "none";
        floor.style.animation = "none";
      }
    }, 10);
  };
  endGame();
}

// explicacion como empezar a jugar y como jugar
