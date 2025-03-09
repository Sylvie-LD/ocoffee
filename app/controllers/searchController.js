// ===== RECUPERATION DES DONNEES AVEC SEQUELIZE =====
// import * as dataMapper from "../data-mapper.js";

// Désormais on importe l'association et non chaque modele
import { Coffee, Feature } from "../models/associations.js";

export const searchByCategory = async (req, res, next) => {
  try {
    // feature vient d'ici : <select name="feature" id="categorie">
    const featureParam = req.query.category;
    console.log("featureParam:", featureParam, "typ:", typeof featureParam);

    // Erreur 404 : http://localhost:3002/search/category?featu
    if (!featureParam || featureParam.trim() === "") {
      return next();
    }

    // récupère feature et caffés associés
    const featureWithCoffees = await Feature.findOne({
      where: { feature: featureParam }, // ✅ Recherche par nom de la feature
      include: "coffees",
    });

    // erreur 404 : http://localhost:3002/search/category?feature=Cors
    if (!featureWithCoffees) {
      return next();
    }

    console.log("sans Cafés :", featureWithCoffees.toJSON());
    console.log(
      "Cafés associés :",
      featureWithCoffees.coffees.map((coffee) => coffee.toJSON())
    );

    // Titre de la page
    const title = `Liste des cafés de la catégorie : ${featureWithCoffees.feature}`;
    // comme on est sur la page catalogue on doit récupérer les catalogues
    const allFeatures = await Feature.findAll();

    res.render("catalogue", {
      title,
      //ici on a des catégories qui contiennent un tableau de cafés {[{},{}]}. Coffees sert pour afficher le catalogugue et pour faire la reccherche donc on ne peut pas faire un for Each côté vue
      coffees: featureWithCoffees.coffees,
      categories: allFeatures,
    });
  } catch (error) {
    next(error);
  }
};

// ===== RECUPERATION DES DONNEES AVEC DATAMAPPER =====
// import * as dataMapper from "../data-mapper.js";

// export const searchByCategory = async (req, res, next) => {
//   const category = req.query.category;
//   try {
//     const coffees = await dataMapper.getCoffeesByCategory(category);
//     const title = `Liste des café de la catégorie : ${category}`;
//     const categories = await dataMapper.getAllCategories();

//     if (!coffees || coffees.length === 0) {
//       return next();
//     }
//     res.render("catalogue", {
//       coffees,
//       categories,
//       title,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
