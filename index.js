// Importer les variables d'environnement
import "dotenv/config";

// Import des dépendances
import path from "node:path";
import express from "express";
import router from "./app/router.js";

// Creation de l'app Express
const app = express();

// Configuration du moteur de template (EJS)
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "./app/views"));

// dans correction S08 : app.set("views", "app/views"); ??

// Ajout d'un dossier public pour les ressources statiques
app.use(express.static(path.join(import.meta.dirname, "./public")));

// Brancher le routeur
app.use(router);

//404
app.use((req, res) => {
  res.status(404).render("404", { path: req.path });
});

// Middleware 500 : capture les erreurs internes de l'application
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).render("500", { message: error.message });
});

// Lancer un serveur
const port = process.env.PORT || 3000; // Fallback (valeur par défaut) au cas où le .env ne serait pas défini
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
