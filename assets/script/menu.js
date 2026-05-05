const burgerButton = document.getElementById("burgerButton");
const closeButton = document.getElementById("closeButton");
const burgerMenu = document.getElementById("burgerMenu");
const menuOverlay = document.getElementById("menuOverlay");
const currentPage = window.location.pathname.split("/").pop();
const menuLinks = document.querySelectorAll(".menu-links a");

menuLinks.forEach((link) => {
  link.classList.remove("active");
  const linkPage = link.getAttribute("href");
  if (
    linkPage === currentPage ||
    (currentPage === "formation_pratique.html" &&
      linkPage === "formations.html")
  ) {
    link.classList.add("active");
  }
});

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
