const aspectRatio = 2560 / 1440;
const container = document.querySelector(".container");

export function fixResize() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const calcHeight = Math.max(0, (viewportWidth - viewportHeight * aspectRatio, 1) * 5);
  const calcWidth = Math.max(0, (viewportHeight * aspectRatio - viewportWidth, 1) * 5);
  const resultHeight = (calcWidth + calcHeight / aspectRatio) * 100;
  const resultWidth = (calcHeight + calcWidth * aspectRatio) * 100;

  container.style.width = resultWidth + "px";
  container.style.height = resultHeight + "px";
}
