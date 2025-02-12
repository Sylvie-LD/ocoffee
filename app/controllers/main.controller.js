import * as dataMapper from "../data-mapper.js";

export const renderHomePage = (req, res) => {
  console.log("res.locals.coffees:", res.locals.coffees);
  res.render("accueil", { coffees: res.locals.coffees });
};

export const renderCatalogPage = async (req, res, next) => {
  // verification paramètre all présent
  const showALl = req.query.all === "true";
  const coffees = await dataMapper.getAllCoffees(showALl ? 100 : 3);
  try {
    res.render("catalogue", {
      coffees: coffees,
      // title: 'Liste des cartes'
    });
  } catch (error) {
    next(error); // Transmet l'erreur au middleware 500
  }
};

export const renderProductPage = (req, res) => {
  res.render("produit", { coffee: res.locals.coffee });
};
