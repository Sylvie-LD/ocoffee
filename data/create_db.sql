
set client_encoding to utf8;

-- Suppression de coffee avant les autres car coffee dépend des 2 autres
DROP TABLE IF EXISTS "coffee" CASCADE;
DROP TABLE IF EXISTS "origin" CASCADE;
DROP TABLE IF EXISTS "feature" CASCADE;

-- Création de la table des origines
CREATE TABLE "origin" (
    "id" SERIAL PRIMARY KEY,
    "country_name" VARCHAR(50) NOT NULL
);

-- Création de la table des caractéristiques
CREATE TABLE "feature" (
    "id" SERIAL PRIMARY KEY,
    "feature" VARCHAR(50) NOT NULL
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
    "feature_id" INT REFERENCES "feature"("id") ON DELETE CASCADE
);

-- Insertion des origines
INSERT INTO "origin" ("country_name") VALUES('Italie'), ('Colombie'), ('Éthiopie'), ('Brésil'), ('Guatemala'),
('Kenya'), ('Indonésie'), ('Costa Rica'), ('Vietnam'), ('Tanzanie'),
('Jamaïque'), ('Rwanda'), ('Panama'), ('Pérou'), ('Hawaï'), ('Nicaragua');

-- Insertion des caractéristiques
INSERT INTO "feature" ("feature") VALUES
('Corsé'), ('Acide'), ('Fruité'), ('Doux'), ('Épicé'), ('Chocolaté');

-- Insertion des cafés 
INSERT INTO "coffee" ("coffee_name", "description", "reference", "price_per_kilo", "available", "origin_id", "feature_id") VALUES
('Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', '100955890', 20.99, TRUE, 1, 1),
('Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', '100955894', 18.75, TRUE, 2, 2),
('Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', '105589090', 22.50, TRUE, 3, 3),
('Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', '134009550', 17.80, TRUE, 4, 4),
('Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', '256505890', 21.25, TRUE, 5, 1),
('Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', '295432730', 23.70, TRUE, 6, 2),
('Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', '302932754', 19.95, TRUE, 7, 1),
('Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', '327302954', 24.50, TRUE, 8, 2),
('Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', '549549090', 16.75, TRUE, 9, 5),
('Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', '582954954', 26.80, TRUE, 10, 3),
('Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', '589100954', 39.25, TRUE, 11, 4),
('Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', '650753915', 21.90, TRUE, 12, 3),
('Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', '795501340', 42.00, TRUE, 13, 3),
('Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', '954589100', 19.40, FALSE, 14, 6),
('Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', '958090105', 55.75, FALSE, 15, 4),
('Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', '691550753', 28.60, FALSE, 16, 3);
