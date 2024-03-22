import db from '../index'
import { buildSelectQuery } from "./buildQueryHelpers/buildSelectQuery"

// Queries the database to return all data from a table or specific data based on optional params. Refer to buildQuery.js for details on how query is built with or without params.
export const getDataFromDb = async (tableName, params) => {
  const { query, values } = buildSelectQuery(tableName, params)

  try {
    const { rows } = await db.query(query, values)
    return rows
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}