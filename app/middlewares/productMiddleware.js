import * as dataMapper from "../data-mapper.js";

// Middleware pour la page d'accueil (récupère 3 cafés)
export const getCoffeesForHomePage = async (req, res, next) => {
  try {
    res.locals.coffees = await dataMapper.getAllCoffees(3);
    next();
  } catch (error) {
    next(error);
  }
};

// Middleware pour la page catalogue (gère ?all=true)
export const getCoffeesForCatalogPage = async (req, res, next) => {
  try {
    const showAll = req.query.all === "true";
    res.locals.coffees = await dataMapper.getAllCoffees(showAll ? 100 : 3);
    next();
  } catch (error) {
    next(error);
  }
};

// Middleware pour la page produit (récupère un café spécifique)
export const getCoffeeForProductPage = async (req, res, next) => {
  try {
    const coffeeId = parseInt(req.params.id);
    if (isNaN(coffeeId)) {
      return next(); // Déclenche une 404 si l'ID est invalide
    }

    const coffee = await dataMapper.getOneCoffee(coffeeId);
    if (!coffee) {
      return next(); // Déclenche une 404 si le produit n'existe pas
    }

    res.locals.coffee = coffee;
    next();
  } catch (error) {
    next(error);
  }
};
