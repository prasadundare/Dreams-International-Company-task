// Slider Logic
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sliderItems = document.querySelectorAll('.slider-item');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

// Function to change the active slider item
function changeSlide(index) {
  sliderItems.forEach(item => item.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  sliderItems[index].classList.add('active');
  dots[index].classList.add('active');
}

// Show the next slide
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sliderItems.length;
  changeSlide(currentIndex);
});

// Show the previous slide
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
  changeSlide(currentIndex);
});

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    changeSlide(currentIndex);
  });
});

// Gallery Logic for random vertical offset
window.onload = function() {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    // Randomly set a vertical offset (between -20px and +20px)
    const randomOffset = Math.random() * 40 - 20;

    // Apply the random vertical offset to each item using the transform property
    item.style.transform = `translateY(${randomOffset}px)`;
  });
};