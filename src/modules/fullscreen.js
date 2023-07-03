export function launchFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    }...
}

// desactiva el FullScreen
export function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }...
}