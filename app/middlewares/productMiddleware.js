import * as dataMapper from "../data-mapper.js";

export const getCoffeeMiddleware = async (req, res, next) => {
  try {
    if (req.path === "/") {
      // Si on est sur la page d'accueil, on récupère 3 produits
      const coffees = await dataMapper.getAllCoffees(3);
      console.log(
        "Type de coffees:",
        Array.isArray(coffees) ? "Tableau" : typeof coffees
      );
      console.log("Contenu de coffees:", coffees);

      res.locals.coffees = coffees;
    } else {
      // Sinon, on récupère le produit correspondant à l'ID
      const coffeeId = parseInt(req.params.id);
      if (isNaN(coffeeId)) {
        return next(); // Déclenche une 404 si l'ID est invalide
      }
      const coffee = await dataMapper.getOneCoffee(coffeeId);
      if (!coffee) {
        return next(); // Déclenche une 404 si le produit n'existe pas
      }
      res.locals.coffee = coffee;
    }
    next();
  } catch (error) {
    next(error); // Transmet l'erreur au middleware 500
  }
};
