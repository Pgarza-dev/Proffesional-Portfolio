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