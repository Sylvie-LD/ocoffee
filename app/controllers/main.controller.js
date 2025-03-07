import * as dataMapper from "../data-mapper.js";

export const renderHomePage = async (req, res, next) => {
  try {
    const coffees = await dataMapper.getAllCoffees(3);
    res.render("accueil", { coffees });
  } catch (error) {
    next(error);
  }
};

// Page des catalogues
export const renderCatalogPage = async (req, res, next) => {
  try {
    const title = "Découvrez nos cafés";
    const showAll = req.query.all === "true";

    const coffees = await dataMapper.getAllCoffees(showAll ? 100 : 3);
    const categories = await dataMapper.getAllCategories();

    res.render("catalogue", { coffees, categories, title });
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

    const coffee = await dataMapper.getOneCoffee(coffeeId);
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
