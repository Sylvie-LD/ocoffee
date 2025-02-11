import * as dataMapper from "../data-mapper.js";

export const renderHomePage = (req, res) => {
  res.render("accueil");
};

export const renderCatalogPage = async (req, res) => {
  // verification paramètre all présent
  const showALl = req.query.all === "true";
  const coffees = await dataMapper.getAllCoffees(showALl ? 100 : 3);
  try {
    res.render("catalogue", {
      coffees: coffees,
      // title: 'Liste des cartes'
    });
  } catch (error) {
    console.error(error);
    res.status(500).render("error");
  }
};

export const renderProductPage = async (req, res, next) => {
  try {
    const coffeeId = parseInt(req.params.id);
    if (isNaN(coffeeId)) {
      return next(); // Déclenche une 404 si l'ID n'est pas valide
    }
    const coffee = await dataMapper.getOneCoffee(coffeeId);
    if (!coffee) {
      return next();
    }

    res.render("produit", { coffee });
  } catch (error) {
    next(error); // Transmet l'erreur au middleware 500
  }
};
