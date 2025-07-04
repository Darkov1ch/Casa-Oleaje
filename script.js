// Sticky Navigation
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 60) {
    nav.classList.add("sticky-nav");
  } else {
    nav.classList.remove("sticky-nav");
  }

  // Scroll Progress Bar
  const progressBar = document.getElementById("progressBar");
  const scrollTotal = document.body.scrollHeight - window.innerHeight;
  const scrollProgress = (window.scrollY / scrollTotal) * 100;
  progressBar.style.width = `${scrollProgress}%`;
});

// Mobile menu logic
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

// Відкрити меню
menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});

// Закрити меню
closeMenu?.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});

// Закривати меню при натисканні на будь-який лінк у меню
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});
