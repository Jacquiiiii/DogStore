/**
 * Builds an SQL update query to update data in database table
 * TODO: Add support for updating multiple columns
 * 
 * @param {string} tableName - The name of the table to update data in.
 * @param {Object} params - Parameters with relevant data for the update.
 * @param {string} params.column - Column where data lives. 
 * @param {Object} params.id - ID of the row to update.
 * @param {string} params.newData - New data to replace the old.
 */
export const buildUpdateQuery = (tableName, params) => {
  const values = [params.newData, params.id]
  const query = `
    UPDATE ${tableName} 
    SET ${params.column} = $1 
    WHERE id = $2 
    RETURNING *
  `

  return { query, values }
}