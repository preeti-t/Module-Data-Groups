window.images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;
let intervalId = null;

// Moves carousel one step (forward or backward)
function moveFrontOnce(forward) {
    const images = window.images;

    currentIndex = forward
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length;

    const image = document.getElementById("carousel-img");
    if (image) image.src = images[currentIndex]; // cleaner + safer
}

// Starts automatic forward movement
function startAutoForward() {
    stopAuto();
    intervalId = setInterval(() => moveFrontOnce(true), 2000);
    toggleButtons(true);
}

// Starts automatic backward movement
function startAutoBackward() {
    stopAuto();
    intervalId = setInterval(() => moveFrontOnce(false), 2000);
    toggleButtons(true);
}

// Stops any active autoplay
function stopAuto() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    toggleButtons(false);
}

// Enables/disables control buttons
function toggleButtons(isRunning) {
    document.getElementById("auto-forward").disabled = isRunning;
    document.getElementById("auto-backward").disabled = isRunning;
    document.getElementById("stop").disabled = !isRunning;
}

// Register button click handlers
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("forward-btn")
        .addEventListener("click", () => moveFrontOnce(true));

    document.getElementById("backward-btn")
        .addEventListener("click", () => moveFrontOnce(false));

    document.getElementById("auto-forward")
        .addEventListener("click", startAutoForward);

    document.getElementById("auto-backward")
        .addEventListener("click", startAutoBackward);

    document.getElementById("stop")
        .addEventListener("click", stopAuto);

    // Stop is disabled initially
    document.getElementById("stop").disabled = true;
});
