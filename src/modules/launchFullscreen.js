const element = document.querySelector("body");

export function launchFullscreen(screen) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  }
}
