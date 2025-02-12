import { Router } from "express";

// on importe nos controllers
import * as mainController from "./controllers/main.controller.js";
import * as productMiddleware from "./middlewares/productMiddleware.js";

const router = Router();

// router.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// page accueil
router.get(
  "/",
  productMiddleware.getCoffeesForHomePage,
  mainController.renderHomePage
);

// page catalogue
router.get(
  "/catalogue",
  productMiddleware.getCoffeesForCatalogPage,
  mainController.renderCatalogPage
);

// page produit
router.get(
  "/produit/:id",
  productMiddleware.getCoffeeForProductPage,
  mainController.renderProductPage
);

//404
// router.get("/404", (req, res) => {
//   res.render("404");
// });

export default router;
