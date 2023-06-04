console.log("index.js connected");

// Hamburguer Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-li');
const pgarzaDev = document.querySelector('.pgarza-dev');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  if (pgarzaDev.style.display === 'none') {
    pgarzaDev.style.display = 'block';
  } else {
    pgarzaDev.style.display = 'none';
  }
});

// hamburger.addEventListener('click', function() {
//   pgarzaDev.style.display = 'none';
// });
// document.getElementsByClassName(".pgarza-dev").style.display = "block";




document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);


