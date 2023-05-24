const images = document.querySelectorAll("#slideshow-container img");
let currentImageIndex = 0;

function showNextImage() {
    const currentImage = images[currentImageIndex];
    currentImage.style.opacity = 0; // Fade out the current image

    currentImageIndex = (currentImageIndex + 1) % images.length;
    const nextImage = images[currentImageIndex];
    nextImage.style.opacity = 1; // Fade in the next image

    setTimeout(() => {
        currentImage.style.display = "none"; // Hide the current image
        nextImage.style.display = "block"; // Show the next image
    }, 1000); // Transition duration (in milliseconds)
}

images[currentImageIndex].style.display = "block"; // Show the first image
setInterval(showNextImage, 3000); // Change image every 3 seconds
