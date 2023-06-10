console.log("index.js connected");
// Dark-mode-button



function toggleDarkMode() {
  const body = document.querySelector("body")
  const darkModeButton = document.querySelector(".dark-mode-button")
  const scrollIndicator = document.querySelector(".scroll-flex")
  
  body.classList.toggle("dark-mode")
  if (body.classList.contains("dark-mode")) {
    darkModeButton.innerHTML = "Light Mode"
    darkModeButton.style.backgroundColor = "white"
    darkModeButton.style.color = "#232325"
    scrollIndicator.style.color = "white"
    
  } else {
    darkModeButton.innerHTML = "Dark Mode"
    darkModeButton.style.backgroundColor = "#232325"
    darkModeButton.style.color = "white"
    scrollIndicator.style.color = "#232325"
  }
}


// Hamburguer Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-li');
const pgarzaDev = document.querySelector('.pgarza-dev');
const projects = document.querySelector('.project-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  if (pgarzaDev.style.display === 'none') {
    pgarzaDev.style.display = 'block';
  } else {
    pgarzaDev.style.display = 'none';
  }
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);


