// import * as dataMapper from "../data-mapper.js";

export const renderHomePage = (req, res) => {
  res.render("accueil", { coffees: res.locals.coffees });
};

export const renderCatalogPage = async (req, res) => {
  const title = "Découvrez nos cafés";
  res.render("catalogue", {
    coffees: res.locals.coffees,
    categories: res.locals.categories,
    title,
  });
};

export const renderProductPage = (req, res) => {
  res.render("produit", { coffee: res.locals.coffee });
};
