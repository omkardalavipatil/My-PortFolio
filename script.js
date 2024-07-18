document.addEventListener("DOMContentLoaded", function() {
  // Sticky Navbar
  window.addEventListener("scroll", function () {
      let header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 100);
  });

  // Show scroll btn when scroll down
  window.addEventListener("scroll", function () {
      let scroll = document.querySelector("#scrool-up");
      scroll.classList.toggle("srcl", window.scrollY > 600);
  });

  // Projects button click event
  document.querySelector("#projects-btn").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default anchor behavior
      document.querySelector("#projects").scrollIntoView({ behavior: 'smooth' });
  });
});
