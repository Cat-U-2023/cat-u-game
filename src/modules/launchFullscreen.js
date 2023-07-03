const element = document.querySelector("html");

export function launchFullscreen() {
  if (element.requestFullscreen) {
    element.requestFullscreen();
    screen.orientation.lock("landscape-primary");
  }
}
