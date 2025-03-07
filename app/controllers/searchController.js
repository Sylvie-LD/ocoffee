import * as dataMapper from "../data-mapper.js";

export const searchByCategory = async (req, res, next) => {
  const category = req.query.category;
  try {
    const coffees = await dataMapper.getCoffeesByCategory(category);
    const title = `Liste des café de la catégorie : ${category}`;
    const categories = await dataMapper.getAllCategories();

    if (!coffees || coffees.length === 0) {
      return next();
    }
    res.render("catalogue", {
      coffees,
      categories,
      title,
    });
  } catch (error) {
    next(error);
  }
};
