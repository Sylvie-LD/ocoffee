import { Router } from "express";

// on importe nos controllers
import * as mainController from "./controllers/main.controller.js";

const router = Router();

// router.get("/", (req, res) => {
//   res.send("Hello World!");
// });

router.get("/", mainController.renderHomePage);

router.get("/catalogue", (req, res) => {
  res.render("catalogue");
});

// router.get("/", mainController.renderCatalogPage);

router.get("/produit", (req, res) => {
  res.render("produit");
});

// router.get("/", mainController.renderProductPage);

router.get("/404", (req, res) => {
  res.render("404");
});

export default router;
