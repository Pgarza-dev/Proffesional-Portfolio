console.log("index.js connected");
// Dark-mode-button



function toggleDarkMode() {
  const body = document.querySelector("body")
  const darkModeButton = document.querySelector(".dark-mode-button")
  const scrollIndicator = document.querySelector(".scroll-flex")
  const projectDescription = document.querySelector(".link-text")
  const projectSiteText = document.querySelector(".link-text")

  // const projectCodeText = document.querySelector(".link-text-rainydays")
  
  body.classList.toggle("dark-mode")
  if (body.classList.contains("dark-mode")) {
    darkModeButton.innerHTML = "Light Mode"
    darkModeButton.style.backgroundColor = "white"
    darkModeButton.style.color = "#232325"
    scrollIndicator.style.color = "white"
    projectDescription.style.color = "white"
    projectSiteText.style.color = "white"
    for (let i = 0; i < document.querySelectorAll(".link-text").length; i++) {
      document.querySelectorAll(".link-text")[i].style.color = "white"
    }
    // projectCodeText.style.color = "white"
  } else {
    darkModeButton.innerHTML = "Dark Mode"
    darkModeButton.style.backgroundColor = "#232325"
    darkModeButton.style.color = "white"
    scrollIndicator.style.color = "#232325"
    projectDescription.style.color = "#232325"
    projectSiteText.style.color = "#232325"
    for (let i = 0; i < document.querySelectorAll(".link-text").length; i++) {
      document.querySelectorAll(".link-text")[i].style.color = "#232325"
  }
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


