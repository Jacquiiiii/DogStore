import db from "db"
import { buildDeleteQuery } from "./buildQueryHelpers/buildDeleteQuery"

// Deletes data from the database based on the provided parameters
export const removeDataFromDb = async (tableName, params) => {
  const { query, values } = buildDeleteQuery(tableName, params)

  try {
    const { rows } = await db.query(query, values)
    return rows
  } catch (error) {
    console.error('Error deleting data:', error)
  }
}