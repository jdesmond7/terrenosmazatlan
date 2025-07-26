// Carousel functionality
let currentSlide = {};

function initCarousel(carouselId) {
    currentSlide[carouselId] = 0;
    updateCarousel(carouselId);
}

function changeSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.children;
    const totalSlides = slides.length;
    
    currentSlide[carouselId] += direction;
    
    if (currentSlide[carouselId] >= totalSlides) {
        currentSlide[carouselId] = 0;
    } else if (currentSlide[carouselId] < 0) {
        currentSlide[carouselId] = totalSlides - 1;
    }
    
    updateCarousel(carouselId);
}

function goToSlide(carouselId, slideIndex) {
    currentSlide[carouselId] = slideIndex;
    updateCarousel(carouselId);
}

function updateCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    const dots = carousel.parentElement.querySelectorAll('.carousel-dot');
    const slideWidth = 100;
    
    // Move carousel
    carousel.style.transform = `translateX(-${currentSlide[carouselId] * slideWidth}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        if (index === currentSlide[carouselId]) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Auto-play functionality
function startAutoPlay(carouselId) {
    setInterval(() => {
        changeSlide(carouselId, 1);
    }, 5000); // Change slide every 5 seconds
}



// Initialize carousels when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel 1 (mobile)
    if (document.getElementById('carousel1')) {
        initCarousel('carousel1');
        startAutoPlay('carousel1');
    }
    
    // Initialize carousel 1 desktop
    if (document.getElementById('carousel1-desktop')) {
        initCarousel('carousel1-desktop');
        startAutoPlay('carousel1-desktop');
    }
}); 