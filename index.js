// Importer les variables d'environnement
import "dotenv/config";

// Import des dépendances
import path from "node:path";
import express from "express";
import router from "./app/router.js";

import { notFound, errorHandler } from "./app/middlewares/errorHandlers.js";

// Creation de l'app Express
const app = express();

// Pour pouvoir utiliser le req.body et récupérer le JSON envoyé par le client
// A VOIR SI J'EN AI BESOIN
// app.use(express.json());

// Configuration du moteur de template (EJS)
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "./app/views"));

// dans correction S08 : app.set("views", "app/views"); ??

// Ajout d'un dossier public pour les ressources statiques
app.use(express.static(path.join(import.meta.dirname, "./public")));

// Favicon static route
app.use("/favicon.ico", express.static("./public/images/logo.svg"));

// Brancher le routeur
app.use(router);

//404
// app.use((req, res) => {
//   res.status(404).render("404", { path: req.path });
// });

// Entre la dernière de nos routes et notre Middleware d'erreur, on va intégrer notre Middleware des gestion des erreurs 404 spécifiquement.
app.use(notFound);

// Middleware 500 : capture les erreurs internes de l'application
// app.use((error, req, res) => {
//   console.error(error);
//   res.status(500).render("500", { message: error.message });
// });

// Dans express, il y a un Middleware implicite (caché dans le code de express) qui se trouve à la fin des Middlewares.
// Quand on rentre dans des routes qu'on a créé, et qu'on n'a pas d'erreur, ce Middleware de Express n'est pas exécuté car
// dans nos route on ne met pas de next().
// Du coup on se retrouve dans ce Middleware que dans les cas suivants :
//  - Si une erreur serveur survient => express a un try catch planqué qui va faire un next()
//  - Si on met nous même un next() quelque part dans nos Middlewares de routes

// Nous ce qu'on veut faire, c'est remplacer ce Middleware de gesion d'erreur par défaut de express par notre propre Middleware
// de gestion d'erreur, dans lequel on va pouvoir gérer notre propre format, notamment avec un retour JSON contenant
// un message d'erreur. Parce qu'après tout, on est dans une API, et donc on doit retourner des messages d'erreur en JSON quand ça survient.
// On va donc utiliser le middleware errorHandler qu'on a créé dans le fichiers middlewares/errorHandlers.js en le définissant nous même après
// nos routes (et plus précisemment, ça doit être notre dernier Middleware à nous).

app.use(errorHandler);

// Lancer un serveur
const port = process.env.PORT || 3000; // Fallback (valeur par défaut) au cas où le .env ne serait pas défini
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
