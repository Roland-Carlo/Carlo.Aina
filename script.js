document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const rsvpButton = document.getElementById("rsvp-button"); // Add RSVP button reference
  const goToTopBTn = document.getElementById("go--to--top--button"); // Go to top button

  window.onscroll = () => {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      goToTopBTn.style.display = "block";
    } else {
      goToTopBTn.style.display = "none";
    }
  }

  goToTopBTn.onclick = () => {
    goToTopBTn.style.display = "none";
    window.scroll({ top: 0 });
  };

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
