document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const rsvpButton = document.getElementById("rsvp-button"); // Add RSVP button reference
  const goToTopBTn = document.getElementById("go--to--top--button"); // Go to top button
  let isScrolling;

  // slider

  const indicators = document.querySelectorAll(".indicator");
  const slides = document.querySelectorAll(".slides img");
  let currentSlide = 0;
  let totalSlides = indicators.length;
  let slideInterval;

  function goToSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((ind) => ind.classList.remove("active"));
    slides[index].classList.add("active");
    indicators[index].classList.add("active");
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % totalSlides;
    goToSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prev);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      clearInterval(slideInterval);
      goToSlide(index);
      startAutoSlide();
    });
  });

  // Swipe Detection
  let startX = 0;
  let endX = 0;

  const slider = document.querySelector(".slider");

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const threshold = 50; // Minimum swipe distance
    const diff = endX - startX;

    if (Math.abs(diff) > threshold) {
      clearInterval(slideInterval);
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      startAutoSlide();
    }
  }

  // Init
  goToSlide(0);
  startAutoSlide();

  window.onscroll = () => {
    scrollFunction();

    // Clear timeout to reset the detection of scroll stop
    clearTimeout(isScrolling);

    // Set a timeout to hide the button when scrolling stops
    isScrolling = setTimeout(() => {
      goToTopBTn.style.display = "none";
    }, 2000); // Adjust time (500ms) to detect when scrolling stops
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      goToTopBTn.style.display = "block";
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

function toggleAnswer(element) {
  let answer = element.nextElementSibling;
  let icon = element.querySelector(".icon");
  let isVisible = answer.style.maxHeight && answer.style.maxHeight !== "0px";
  document.querySelectorAll(".answer").forEach((ans) => {
    ans.style.maxHeight = "0";
    ans.style.padding = "0";
  });
  document.querySelectorAll(".icon").forEach((ic) => (ic.textContent = "+"));
  if (!isVisible) {
    answer.style.maxHeight = answer.scrollHeight + 20 + "px";
    answer.style.padding = "10px 0";
    icon.textContent = "−";
  }
}
