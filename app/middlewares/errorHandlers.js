const notFound = (req, res, next) => {
  const error = new Error("Not Found");
  error.statusCode = 404;
  next(error);
};

// app.use((req, res) => {
//   res.status(404).render("404", { path: req.path });
// });

// Le but de ce Middleware est d'uniformiser les retour d'erreur, peut importe d'où ils proviennent dans mon application (dans mes APIs)
// Il faudra juste faire en sorte que le paramètre error de ce Middleware contienne les infos dont le Middleware a besoin :
//   - Un "statusCode" avec le code HTTP de l'erreur
//   - Un "message" avec le ou les messages d'erreurs à indiquer au client de notre API pour l'informer du problème qu'il a rencontré.
// Dans Express, un middleware d'erreur doit avoir 4 paramètres : (error, req, res, next).
// Même si tu n'utilises pas next, tu dois le laisser pour qu'Express identifie correctement le middleware comme un gestionnaire d'erreurs.
const errorHandler = (error, req, res, next) => {
  const status = error.statusCode || 500;

  // Ici, on pourrait potentiellement obfusquer le message d'erreur si il contient des données sensibles.

  // Là on est sur de l'API, donc on retourne du JSON, mais si on avait été sur une app frontale ou monorepo, on aurait pu faire un render ejs
  // d'une jolie page d'erreur customisée.
  res.status(status).json({ status, error: error.message });
};

// app.use((error, req, res) => {
//   console.error(error);
//   res.status(500).render("500", { message: error.message });
// });

export { notFound, errorHandler };
