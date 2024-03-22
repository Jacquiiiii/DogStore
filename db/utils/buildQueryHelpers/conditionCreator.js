// Creates SQL condition and gets its corresponding value for a given key-value pair
// Example of a condition and value: 'name LIKE $1', '%John%'
const createCondition = (tableName, key, value, comparisonOperator, placeholderIndex, caseSensitive) => {
  const textCondition = caseSensitive ? 
    `${tableName}.${key} ${comparisonOperator} $${placeholderIndex}` : 
    `LOWER(${tableName}.${key}) ${comparisonOperator} LOWER($${placeholderIndex})`
    
  const numberCondition = `${tableName}.${key}::text ${comparisonOperator} $${placeholderIndex}` // Cast to text to prevent errors

  const condition = typeof value === 'number' ? numberCondition : textCondition

  // TODO: Add support for other comparison operators (?)
  const conditionValue = ['LIKE', 'ILIKE'].includes(comparisonOperator) ? `%${value}%` : `${value}`

  return { condition, conditionValue }
}

// Generates SQL conditions and values for a given set of parameters
export const generateQueryConditions = (tableName, params) => {
  // Extract data from params and assign default values if not defined
  const {
    comparisonOperator = 'LIKE',
    logicalOperator = 'OR',
    caseSensitive = false,
    data
  } = params

  let queryAddition
  let conditionValues = []
  let conditionsArray = []
  let placeholderIndex = 1

  // Loops through each key-value pair in params.data to create conditions with createCondition helper function and update values array
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      const conditions = value.map(val => {
        const { condition, conditionValue } = createCondition(tableName, key, val, comparisonOperator, placeholderIndex++, caseSensitive)

        conditionValues.push(conditionValue)
        return condition
      })
      
      conditionsArray.push(`(${conditions.join(` ${logicalOperator} `)})`)
    } else {
      const { condition, conditionValue } = createCondition(tableName, key, value, comparisonOperator, placeholderIndex++, caseSensitive)

      conditionsArray.push(condition)
      conditionValues.push(conditionValue)
    }
  }

  queryAddition = ` WHERE ${conditionsArray.join(` ${logicalOperator} `)}`
  return { queryAddition, conditionValues }
}