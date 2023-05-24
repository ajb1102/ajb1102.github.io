const images = document.querySelectorAll("#slideshow-container img");
let currentImageIndex = 0;

function showNextImage() {
    images[currentImageIndex].style.display = "none";
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = "block";
}

setInterval(showNextImage, 3000); // Change image every 3 seconds
