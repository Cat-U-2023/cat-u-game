const element = document.querySelector(".container");

export function launchFullscreen(screen) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  }
}
