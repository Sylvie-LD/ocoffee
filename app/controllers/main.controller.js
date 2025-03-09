// ===== RECUPERATION DES DONNEES AVEC SEQUELIZE =====
// import * as dataMapper from "../data-mapper.js";
import { Coffee } from "../models/coffee.js";
import { Feature } from "../models/feature.js";

export const renderHomePage = async (req, res, next) => {
  try {
    const coffees = await Coffee.findAll({ limit: 3 });
    res.render("accueil", { coffees });
  } catch (error) {
    next(error);
  }
};

export const renderCatalogPage = async (req, res, next) => {
  const title = "Découvrez nos cafés";
  try {
    // sI URL contient?all=true
    const showAll = req.query.all === "true";
    console.log(
      `Query Params - all: ${showAll}, name: ${req.query.name}, limit: ${req.query.limit}`
    );
    const coffees = await Coffee.findAll({ limit: showAll ? 100 : 3 });
    const categories = await Feature.findAll();
    res.render("catalogue", {
      coffees,
      categories,
      title,
    });
  } catch (error) {
    next(error);
  }
};

export const renderProductPage = async (req, res, next) => {
  try {
    const coffeeId = parseInt(req.params.id);
    if (isNaN(coffeeId)) {
      return next(); // Déclenche une 404 si l'ID est invalide
    }

    const coffee = await Coffee.findByPk(coffeeId);
    if (!coffee) {
      return next(); // Déclenche une 404 si le produit n'existe pas
    }
    res.render("produit", { coffee });
  } catch (error) {
    next(error);
  }
};

export const renderContactPage = (req, res) => {
  res.render("contact");
};

// ===== RECUPERATION DES DONNEES AVEC DATAMAPPER =====
// import * as dataMapper from "../data-mapper.js";

// export const renderHomePage = async (req, res, next) => {
//   try {
//     const coffees = await dataMapper.getAllCoffees(3);
//     res.render("accueil", { coffees });
//   } catch (error) {
//     next(error);
//   }
// };

// // Page des catalogues
// export const renderCatalogPage = async (req, res, next) => {
//   try {
//     const title = "Découvrez nos cafés";
//     const showAll = req.query.all === "true";

//     const coffees = await dataMapper.getAllCoffees(showAll ? 100 : 3);
//     const categories = await dataMapper.getAllCategories();

//     res.render("catalogue", { coffees, categories, title });
//   } catch (error) {
//     next(error);
//   }
// };

// export const renderProductPage = async (req, res, next) => {
//   try {
//     const coffeeId = parseInt(req.params.id);
//     if (isNaN(coffeeId)) {
//       return next(); // Déclenche une 404 si l'ID est invalide
//     }

//     const coffee = await dataMapper.getOneCoffee(coffeeId);
//     if (!coffee) {
//       return next(); // Déclenche une 404 si le produit n'existe pas
//     }

//     res.render("produit", { coffee });
//   } catch (error) {
//     next(error);
//   }
// };

// export const renderContactPage = (req, res) => {
//   res.render("contact");
// };
