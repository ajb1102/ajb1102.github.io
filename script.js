const images = document.querySelectorAll("#slideshow-container img");
let currentImageIndex = 0;
let slideshowInterval;
const playPauseButton = document.getElementById("playPauseButton");

function showNextImage() {
    images[currentImageIndex].style.display = "none";
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = "block";
}

function startSlideshow() {
    playPauseButton.textContent = "Pause";
    slideshowInterval = setInterval(showNextImage, 3000);
}

function pauseSlideshow() {
    playPauseButton.textContent = "Play";
    clearInterval(slideshowInterval);
}

playPauseButton.addEventListener("click", function() {
    if (playPauseButton.textContent === "Play") {
        startSlideshow();
    } else {
        pauseSlideshow();
    }
});
