const nav = document.querySelector(".navbar");
const openBtn = document.querySelector(".nav-toggle-btn");
const closeBtn = document.querySelector(".Close-outline");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", () => {
  nav.classList.add("open");
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("open");
  overlay.classList.remove("show");
});
