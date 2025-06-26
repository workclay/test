// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".navbar-links ul");

// hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
//     hamburger.classList.toggle("active");
// });

// This is for the darkmode stuff

const toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
});

window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    document.body.classList.add('dark-mode');
  }
});

// Carousel

// const images = document.querySelectorAll('.carousel-images img');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// let current = 0;

// function showImage(index) {
//   images.forEach((img, i) => {
//     img.classList.toggle('active', i === index);
//   });
// }

// prevBtn.addEventListener('click', () => {
//   current = (current - 1 + images.length) % images.length;
//   showImage(current);
// });

// nextBtn.addEventListener('click', () => {
//   current = (current + 1) % images.length;
//   showImage(current);
// });

// Side Tab

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navbarLinks = document.querySelector(".navbar-links");
  const overlay = document.querySelector(".overlay-blur");

  hamburger.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    overlay.classList.remove("active");
  });
});