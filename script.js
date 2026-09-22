document.addEventListener("DOMContentLoaded", function() {

  /* 1. HAMBURGER MENU */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  /* 2. ACTIVE NAV HIGHLIGHT ON SCROLL */
  const sections   = document.querySelectorAll('section');
  const navAnchors = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - 80) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach(function (anchor) {
      anchor.style.color = '';
      if (anchor.getAttribute('href') === '#' + current) {
        anchor.style.color = '#2c5f8a';
      }
    });
  });

  /* 3. SCROLL TO TOP BUTTON SCRIPT */
  const scrollBtn = document.getElementById("scrollToTopBtn");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) { 
        scrollBtn.classList.add("show"); 
      } else { 
        scrollBtn.classList.remove("show"); 
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});