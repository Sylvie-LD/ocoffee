export const coffee = {
  init: function () {
    const buttonMenuEl = document.querySelector("#menu-toggler");
    buttonMenuEl.addEventListener("click", coffee.displayMenu);
    // const buttonDisplayProductsEl = document.querySelector(".btn-produits");
    // buttonDisplayProductsEl.addEventListener("click", (event) => {
    //   console.log("Bouton cliqué !", event); // Vérifie que le clic est bien détecté
    //   coffee.displayAllProducts();
    // });
  },

  //  appel des autres fonctions
  // Afficher le menu au clic pour l'affichage mobile

  // on récupère l'élément barre de navigation, on lu ajoute la classe css banner-open
  // on récupère l'élément bouton auquel on ajoute la classe banner-open
  displayMenu: function (event) {
    console.log("Toggle menu");
    const navEl = document.querySelector(".nav");
    navEl.classList.toggle("banner--open");

    const buttonEl = document.querySelector(".header-menu__button");
    buttonEl.classList.toggle("banner--open");
  },

  // Au clic sur class "btn-produits" on enlève la classe "total-produits" à la classe catalogue-produits

  displayAllProducts: function (event) {
    const catalogueEl = document.querySelector(".catalogue-produits");

    if (catalogueEl) {
      console.log("Bouton cliqué !");
      console.log("Classes avant suppression :", [...catalogueEl.classList]); // Affichage clair des classes

      if (catalogueEl.classList.contains("total-produits")) {
        console.log(
          "✅ La classe 'total-produits' est présente et va être supprimée."
        );
      } else {
        console.warn("⚠️ La classe 'total-produits' N'EST PAS présente !");
      }

      // Supprimer la classe
      catalogueEl.classList.remove("total-produits");

      console.log("Classes actuelles après suppression :", [
        ...catalogueEl.classList,
      ]);
      // 🔎 Vérification après un délai de 1 seconde
      setTimeout(() => {
        console.log("⏳ Classes après un délai :", [...catalogueEl.classList]);
      }, 1000);
    } else {
      console.log("Élément '.catalogue-produits' non trouvé !");
    }
  },
};
