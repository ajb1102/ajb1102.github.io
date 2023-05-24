const images = Array.from(document.querySelectorAll("#slideshow-container img"));
let currentImageIndex = 0;
let isPaused = false;

// Randomize the order of images
shuffleArray(images);

// Display the first image
images[currentImageIndex].style.display = "block";

// Add event listener to the slideshow container
const slideshowContainer = document.getElementById("slideshow-container");
slideshowContainer.addEventListener("click", handleSlideshowClick);

function handleSlideshowClick(event) {
    const { clientX, clientY } = event;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const oneThirdWidth = Math.floor(screenWidth / 3);

    if (clientX < oneThirdWidth) {
        navigateBack();
    } else if (clientX > (screenWidth - oneThirdWidth)) {
        navigateForward();
    } else {
        togglePlayPause();
    }
}

function navigateBack() {
    pauseSlideshow();
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImageAtIndex(currentImageIndex);
}

function navigateForward() {
    pauseSlideshow();
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImageAtIndex(currentImageIndex);
}

function togglePlayPause() {
    isPaused = !isPaused;
}

function showImageAtIndex(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}

function pauseSlideshow() {
    isPaused = true;
}

function resumeSlideshow() {
    isPaused = false;
}

function startSlideshow() {
    if (!isPaused) {
        navigateForward();
    }
}

setInterval(startSlideshow, 3000); // Change image every 3 seconds

// Utility function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
