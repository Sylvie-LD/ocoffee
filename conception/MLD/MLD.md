# Modèle Logique de Données (MLD)

Etape de traduction d'un MCD dans une représentation plus proche d'une implémentation dans un système de gestion de bases de données.

C'est un exercice moins académique et formalisé, plusieurs formes de représentation sont acceptées.

## Etapes de réalisation

- Traduire les noms d'entité en nom de tables
- Traduire les attributs en nom de champs/colonnes.
- Traduire les associations sous forme :
  - de clés primaires / étrangères
  - tables de liaison le cas échéant

## Version textuelle

COFFEE ( <u>id</u>, coffee_name, description, reference, price_per_kilo, available, origin_id, feature_id )
FEATURES ( <u>id</u>, feature )
ORIGIN ( <u>id</u>, country_name )
