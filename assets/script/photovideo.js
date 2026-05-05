// On attend que le DOM soit chargé avant de toucher quoi que ce soit
document.addEventListener("DOMContentLoaded", () => {
  const boutonsFiltres = document.querySelectorAll(".btn-filtre");
  const itemsGalerie = document.querySelectorAll(".galerie-item");

  boutonsFiltres.forEach((bouton) => {
    bouton.addEventListener("click", () => {
      // On déplace la classe "actif" sur le bouton cliqué
      boutonsFiltres.forEach((b) => b.classList.remove("actif"));
      bouton.classList.add("actif");

      const filtre = bouton.dataset.filter;

      itemsGalerie.forEach((item) => {
        // "tous" — tout le monde revient à l'écran
        if (filtre === "tous") {
          item.classList.remove("masque");
          return;
        }

        // Sinon on cache les items qui n'ont pas la classe de l'album sélectionné
        if (item.classList.contains(filtre)) {
          item.classList.remove("masque");
        } else {
          item.classList.add("masque");
        }
      });
    });
  });
});
