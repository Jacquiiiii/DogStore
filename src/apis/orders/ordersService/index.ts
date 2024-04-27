import { Order, OrderById, OrderItems } from '@/types/types'
import { getDataFromDb } from '../../../../db/utils/dbGet'
import { addDataToDb } from '../../../../db/utils/dbPost'

// Retrieves order from the database filtered by params
export const getFilteredOrder = async (params: OrderById) => {
  const updatedParams = {
    comparisonOperator: '=',
    caseSensitive: true,
    data: params
  }
  return getDataFromDb('dogstore_orders', updatedParams)
}

// Retrieves order items from the database filtered by params
export const getFilteredOrderItems = async (params: Order) => {
  const updatedParams = {
    comparisonOperator: '=',
    caseSensitive: true,
    data: params
  }
  return getDataFromDb('dogstore_order_items', updatedParams)
}

// Adds order to the database
export const addOrder = async (params: Order) => addDataToDb('dogstore_orders', params)

// Adds order items to the database
export const addOrderItems = async (params: OrderItems) => addDataToDb('dogstore_order_items', params)