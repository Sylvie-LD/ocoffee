import { Router } from "express";

const router = Router();

// router.get("/", (req, res) => {
//   res.send("Hello World!");
// });

router.get("/", (req, res) => {
  res.render("accueil");
});

router.get("/catalogue", (req, res) => {
  res.render("catalogue");
});

router.get("/produit", (req, res) => {
  res.render("produit");
});

router.get("/404", (req, res) => {
  res.render("404");
});

export default router;
