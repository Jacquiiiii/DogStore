// Builds an SQL insert query to insert data into the database
// TODO: Add support for multiple inserts (params could accept either an object or an array of objects?)
export const buildInsertQuery = (tableName, params) => {
  const keys = Object.keys(params)
  const values = Object.values(params)
  let placeholder = 1

  const query = `
    INSERT INTO ${tableName} (${keys.join(', ')})
    VALUES (${values.map(() => `$${placeholder++}`).join(', ')})
    RETURNING *
  `

  return { query, values }
}