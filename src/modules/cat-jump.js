const catPlayer = document.querySelector(".character");
const mummy = document.querySelector(".obstacle");
const floor = document.querySelector(".floor");
const bg = document.querySelector(".background-egypt");
const score = document.querySelector(".score");
const gameOver = document.querySelector(".game-over");

export function catJump() {
  let playerScore = 0;
  let interval = 0;

  document.addEventListener("keydown", (start) => {
    if (start.code === "Space") {
      gameOver.style.display = "none";
      catPlayer.classList.add("cat-running");
      mummy.classList.add("obstacle-moving");
      bg.style.animation = "animated-background 80s linear infinite";
      floor.style.animation = "animated-floor 18s linear infinite";
      playerScore = 0;
      const scoreCounter = () => {
        playerScore++;
        score.innerHTML = `${playerScore}`;
      };
      interval = setInterval(scoreCounter, 200);
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
      if (mummyLeft <= 200 && mummyLeft >= 150 && catBottom <= 400) {
        // collision
        gameOver.style.display = "block";
        catPlayer.classList.remove("cat-running");
        mummy.classList.remove("obstacle-moving");
        bg.style.animation = "none";
        floor.style.animation = "none";
        playerScore = 0;
        clearInterval(interval);
      }
    }, 10);
  };
  endGame();
}
