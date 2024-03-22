import db from "db"
import { buildUpdateQuery } from "./buildQueryHelpers/buildUpdateQuery"

// Function that builds an SQL update query based on the provided parameters to update data in the database
export const updateDataInDb = async (tableName, params) => {
  const { query, values } = buildUpdateQuery(tableName, params)

  try {
    const { rows } = await db.query(query, values)
    return rows
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}