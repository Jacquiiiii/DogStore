// Builds an SQL delete query to delete data from the database
// TODO: Add support for multiple deletes (params could accept either an object or an array of objects?) and case sensitivity
export const buildDeleteQuery = (tableName, params) => {
  const keys = Object.keys(params)
  const values = Object.values(params)
  const condition = `${keys[0]}::text = $1` // Cast to text to prevent errors

  const query = `
    DELETE FROM ${tableName} 
    WHERE ${condition}
    RETURNING *
  `

  return { query, values }
}