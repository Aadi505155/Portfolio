/* script.js — All the JavaScript for Aditya's portfolio */


/* 1. HAMBURGER MENU (mobile only)
   Clicking the hamburger icon shows/hides the nav links */

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

// Toggle "open" class when hamburger is clicked
hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('open'); // adds class if missing, removes if present
});

// Close the menu when any nav link is clicked
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
  });
});


/* 2. ACTIVE NAV HIGHLIGHT ON SCROLL
   Colors the nav link that matches the current section */

const sections   = document.querySelectorAll('section');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {

  let current = ''; // stores which section is on screen

  // Find which section the user has scrolled to
  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute('id'); // e.g. "about", "skills"
    }
  });

  // Highlight the matching nav link, reset the rest
  navAnchors.forEach(function (anchor) {
    anchor.style.color = ''; // reset color
    if (anchor.getAttribute('href') === '#' + current) {
      anchor.style.color = '#2c5f8a'; // blue highlight
    }
  });

});
