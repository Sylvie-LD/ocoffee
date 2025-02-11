import client from "./database.js";

// pour exporter dataMapper

export async function getAllCoffees() {
  const result = await client.query(`SELECT * FROM "coffee"`);

  const coffees = result.rows;

  return coffees;
}
