// const element = document.querySelector(".container");

export function Fullscreen(screen) {
  const prefix = "orientation" in screen
    ? ""
    : "mozOrientation" in screen
      ? "moz"
      : "msOrientation" in screen
        ? "ms"
        : null;

  if (prefix === null) {
    document.getElementById("so-unsupported").classList.remove("hidden");

    ["lock-button", "unlock-button"].forEach(function (elementId) {
      document.getElementById(elementId).setAttribute("disabled", "disabled");
    });
  } else {
    const form = document.getElementById("form-orientation");
    const select = document.getElementById("orientation-type");

    // Function needed to see lock in action
    function launchFullscreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }

    function exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    function orientationHandler() {
      const orientationProperty = prefix + (prefix === "" ? "o" : "O") + "rientation";
      document.getElementById("orientation").textContent = screen[orientationProperty];
    }

    screen.addEventListener(prefix + "orientationchange", orientationHandler);
    document.getElementById("lock-button").addEventListener("click", function (event) {
      event.preventDefault();
      launchFullscreen(document.documentElement);

      setTimeout(function () {
        screen[prefix + (prefix === "" ? "l" : "L") + "ockOrientation"](select.value);
      }, 1);
    });
    document.getElementById("unlock-button").addEventListener("click", function () {
      exitFullscreen();
      screen[prefix + (prefix === "" ? "u" : "U") + "nlockOrientation"]();
    });

    orientationHandler();
  }
}
