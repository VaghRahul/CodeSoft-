const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});


const headerText = document.querySelector('header h1');
const textArray = ["Data Analyst", "Web Developer", "Generative AI Enthusiast"];
let currentTextIndex = 0;
let charIndex = 0;
let typingSpeed = 100;

function type() {
  if (charIndex < textArray[currentTextIndex].length) {
    headerText.textContent += textArray[currentTextIndex][charIndex];
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    charIndex = 0;
    currentTextIndex++;
    if (currentTextIndex >= textArray.length) currentTextIndex = 0;
    setTimeout(type, 2000); 
  }
}

type();
