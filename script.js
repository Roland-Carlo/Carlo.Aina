document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const rsvpButton = document.getElementById("rsvp-button"); // Add RSVP button reference

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");

    // Toggle between Hamburger and "X"
    if (menuToggle.classList.contains("active")) {
      menuToggle.innerHTML = "&#10005;"; // Unicode for "X"
      rsvpButton.style.display = "none"; // Hide RSVP button
    } else {
      menuToggle.innerHTML = "&#9776;"; // Unicode for Hamburger Menu
      rsvpButton.style.display = "block"; // Show RSVP button
    }
  });
});
