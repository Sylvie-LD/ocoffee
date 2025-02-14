import client from "./database.js";

//
export async function getAllCoffees(limit = 3) {
  const result = await client.query(
    `SELECT * FROM "coffee" ORDER BY "coffee_name" ASC LIMIT $1`,
    [limit]
  );
  const coffees = result.rows;
  return coffees;
}

export async function getOneCoffee(coffeeId) {
  const result = await client.query(
    `SELECT 
  coffee.*, 
  origin.country_name, 
  features.feature
FROM "coffee"
JOIN "origin" ON coffee.origin_id = origin.id
JOIN "features" ON coffee.feature_id = features.id
WHERE coffee.id = $1;
`,
    [coffeeId]
  );
  const coffee = result.rows[0];
  return coffee;
}

// SELECT * FROM "coffee" WHERE "id"=$1
// SELECT * FROM "origin" JOIN "coffee" ON coffee.origin_id = origin.id WHERE coffee.coffee_name = 'Espresso';
// SELECT * FROM "features" JOIN "coffee" ON coffee.feature_id = features.id WHERE coffee.coffee_name = 'Espresso';

//on récupère les cafés appartenant à telle catégorie
export async function getCoffeesByCategory(category) {
  let query;

  query = {
    text: `SELECT * FROM "features" JOIN "coffee" ON coffee.feature_id = features.id WHERE features.feature=$1`,
    values: [category],
  };

  const results = await client.query(query);
  return results.rows;
}
// Récupérer le nom des catégories
export async function getAllCategories() {
  const query = {
    text: `SELECT * FROM "features" ORDER BY "feature" ASC`,
  };
  const results = await client.query(query);
  return results.rows;
}
