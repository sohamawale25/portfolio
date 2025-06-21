// AOS Animation Initialization
AOS.init({
  duration: 1000,
  once: true,
  offset: 50,
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a.nav-btn').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    document.getElementById('nav-links').classList.remove('active');
  });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Typing Animation in Hero Section
const typingText = document.querySelector('.typing');
const phrases = [
  "Frontend Developer",
  "React Enthusiast",
  "CSS & UI Perfectionist",
  "Open Source Contributor"
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function typeLoop() {
  isEnd = false;
  typingText.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      typingText.innerHTML = currentPhrase.join('');
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
      typingText.innerHTML = currentPhrase.join('');
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  const speed = isEnd ? 1500 : isDeleting ? 60 : 120;
  setTimeout(typeLoop, speed);
}

typeLoop();
