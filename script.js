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
