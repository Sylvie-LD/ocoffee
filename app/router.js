import { Router } from "express";

// on importe nos controllers
import * as mainController from "./controllers/main.controller.js";

import * as searchController from "./controllers/searchController.js";

const router = Router();

router.get(
  "/",

  mainController.renderHomePage
);

// page catalogue
router.get(
  "/catalogue",

  mainController.renderCatalogPage
);

// page produit
router.get(
  "/produit/:id",

  mainController.renderProductPage
);

// page recherche

router.get(
  "/search/category",

  searchController.searchByCategory
);

//  page contact
router.get("/contact", mainController.renderContactPage);

//404
// router.get("/404", (req, res) => {
//   res.render("404");
// });

export default router;
