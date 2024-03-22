import { generateQueryConditions } from "./conditionCreator"

/**
 * Builds an SQL select query to retrieve data from the database
 * 
 * @param {string} tableName - The name of the table to retrieve data from.
 * @param {Object} params - Optional parameters to customize the query.
 * @param {string} params.columns - Columns from the table to be returned. 
 * @param {Object} params.data - An object containing key-value pairs to be used in the conditions. Values can be strings, numbers, or arrays of strings or numbers.
 * @param {string} params.comparisonOperator - SQL comparison operator.
 * @param {string} params.logicalOperator - SQL logical operator.
 * @param {boolean} params.caseSensitive - To state whether the comparison should be done by case sensitivity or not. If false, values being compared are converted to lowercase before comparison.
 * @param {Array} params.joinConditions - An array of objects specifying the tables to join with and the conditions for the join.
 */
export const buildSelectQuery = (tableName, params) => {
  const columns = params && params.columns ? params.columns : '*'

  // If no params are passed in, all data from table will be returned
  // Example query: 'SELECT * FROM users'
  let query = `SELECT ${columns} FROM ${tableName}`
  let values = []

  // If joinConditions are passed in, add join statements to the query
  if (params && params.joinConditions) {
    for (const joinCondition of params.joinConditions) {
      query += ` LEFT JOIN ${joinCondition.joinTable} ON ${joinCondition.condition}`
    }
  }

  // If params are passed in and params.data is defined, conditions will be added to the query and values will be updated
  // Example query: 'SELECT * FROM users WHERE name LIKE $1 OR name LIKE $2'
  // Example values: ['%John%', '%Jane%']
  if (params && params.data) {
    // Ensure that the id value is a number if passed in
    params.data.id ? params.data.id = Number(params.data.id): null

    const { queryAddition, conditionValues } = generateQueryConditions(tableName, params)
    query += queryAddition
    values = conditionValues
  }

  return { query, values }
}