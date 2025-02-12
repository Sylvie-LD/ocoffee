import client from "./database.js";

// pour exporter dataMapper

export async function getAllCoffees(limit = 3) {
  const result = await client.query(`SELECT * FROM "coffee" LIMIT $1`, [limit]);
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
