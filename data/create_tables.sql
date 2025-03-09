BEGIN; -- Débute une transaction = si l'une des commandes échoue, elles échouent toutes !
set client_encoding to utf8;

-- Suppression de coffee avant les autres car coffee dépend des 2 autres
DROP TABLE IF EXISTS "coffee" CASCADE;
DROP TABLE IF EXISTS "origin" CASCADE;
DROP TABLE IF EXISTS "feature" CASCADE;

-- Création de la table des origines
CREATE TABLE "origin" (
    "id" SERIAL PRIMARY KEY,
    "country_name" VARCHAR(50) NOT NULL,
     "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

-- Création de la table des caractéristiques
CREATE TABLE "feature" (
    "id" SERIAL PRIMARY KEY,
    "feature" VARCHAR(50) NOT NULL,
     "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

-- Création de la table des cafés, TEXT au cas où la description est longue, DECIMAL et non INT
CREATE TABLE "coffee" (
    "id" SERIAL PRIMARY KEY,
    "coffee_name" VARCHAR(100) NOT NULL, 
    "description" TEXT,
    "reference" VARCHAR(50) NOT NULL,
    "price_per_kilo" DECIMAL(10,2) NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT TRUE,
    "origin_id" INT REFERENCES "origin"("id") ON DELETE CASCADE,
    "feature_id" INT REFERENCES "feature"("id") ON DELETE CASCADE,
     "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);


COMMIT;
