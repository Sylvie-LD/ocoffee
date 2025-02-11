// Charge les variables d'environnement
import "dotenv/config";

// Import du module PG
import pg from "pg";

// L'URL de la base de données
// PROTOCOL://USER:PASSWORD@HOST:PORT/BDD
// (local) postgres://trombi:trombi@localhost:5432/trombi
// (prod)  postgres://etudiant:js4life@pg.oclock.lan:5432/trombi

// Créer un client de connexion (tunnel) vers notre base de données PostgreSQL
const client = new pg.Client(process.env.PG_URL);

// Ouvrir la connexion
// ou await client.connect(); ?????
client.connect();

// Test manuel
// console.log(await client.query(`SELECT * FROM "promo"`));
// Exécuter ce code en important database.js depuis l'index.js

// Exporter cette connexion, pour s'en servir dans d'autres fichiers
export default client;
