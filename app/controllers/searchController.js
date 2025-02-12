import * as dataMapper from "../data-mapper.js";

export const searchByCategory = async (req, res, next) => {
  const category = req.query.category;
  try {
    const coffees = await dataMapper.getCoffeesByCategory(category);
    const title = `Liste des café dont le nom contient ${category}`;

    if (!coffees || coffees.length === 0) {
      return next();
    }
    res.render("catalogue", {
      coffees,
      categories: res.locals.categories,
      title,
    });
  } catch (error) {
    next(error);
  }
};
