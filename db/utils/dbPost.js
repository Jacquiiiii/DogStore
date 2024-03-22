import db from ".."
import { buildInsertQuery } from "./buildQueryHelpers/buildInsertQuery"

// Function that builds an SQL query based on the provided parameters to insert data into the database
export const addDataToDb = async (tableName, params) => {
  const { query, values } = buildInsertQuery(tableName, params)

  try {
    const { rows } = await db.query(query, values)
    return rows
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}