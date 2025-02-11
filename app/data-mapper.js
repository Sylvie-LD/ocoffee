import client from "./database.js";

// pour exporter dataMapper

export async function getAllCoffees(limit = 3) {
  const result = await client.query(`SELECT * FROM "coffee" LIMIT $1`, [limit]);
  const coffees = result.rows;
  return coffees;
}

export async function getOneCoffee(coffeeId) {
  const result = await client.query(`SELECT * FROM "coffee" WHERE "id"=$1`, [
    coffeeId,
  ]);
  const coffee = result.rows[0];
  return coffee;
}
