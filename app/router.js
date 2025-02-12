import { Router } from "express";

// on importe nos controllers
import * as mainController from "./controllers/main.controller.js";
import * as productMiddleware from "./middlewares/productMiddleware.js";
import * as searchController from "./controllers/searchController.js";

const router = Router();

router.get(
  "/",
  productMiddleware.getCoffeesForHomePage,
  mainController.renderHomePage
);

// page catalogue
router.get(
  "/catalogue",
  productMiddleware.getAllCategories,
  productMiddleware.getCoffeesForCatalogPage,
  mainController.renderCatalogPage
);

// page produit
router.get(
  "/produit/:id",
  productMiddleware.getCoffeeForProductPage,
  mainController.renderProductPage
);

// page recherche

router.get(
  "/search/category",
  productMiddleware.getAllCategories,
  searchController.searchByCategory
);

//404
// router.get("/404", (req, res) => {
//   res.render("404");
// });

export default router;
