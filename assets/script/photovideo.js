document.addEventListener("DOMContentLoaded", () => {
  const boutonsFiltres = document.querySelectorAll(".btn-filtre");
  const itemsGalerie = document.querySelectorAll(".galerie-item");

  boutonsFiltres.forEach((bouton) => {
    bouton.addEventListener("click", () => {
      boutonsFiltres.forEach((b) => b.classList.remove("actif"));
      bouton.classList.add("actif");

      const filtre = bouton.dataset.filter;

      itemsGalerie.forEach((item) => {
        if (filtre === "tous") {
          item.classList.remove("masque");
          return;
        }

        if (item.classList.contains(filtre)) {
          item.classList.remove("masque");
        } else {
          item.classList.add("masque");
        }
      });
    });
  });
});
