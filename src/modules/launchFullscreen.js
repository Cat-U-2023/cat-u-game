const element = document.querySelector("html");

export function launchFullscreen() {
  element.requestFullscreen();
}
