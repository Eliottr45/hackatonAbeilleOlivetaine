const burgerButton = document.getElementById("burgerButton");
const closeButton = document.getElementById("closeButton");
const burgerMenu = document.getElementById("burgerMenu");
const menuOverlay = document.getElementById("menuOverlay");

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.add("open");
  menuOverlay.classList.add("open");
});

closeButton.addEventListener("click", () => {
  burgerMenu.classList.remove("open");
  menuOverlay.classList.remove("open");
});

menuOverlay.addEventListener("click", () => {
  burgerMenu.classList.remove("open");
  menuOverlay.classList.remove("open");
});