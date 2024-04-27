import type { NextApiRequest, NextApiResponse } from 'next'
import { addOrder, addOrderItems, getFilteredOrder, getFilteredOrderItems } from '../ordersService'
import { ResponseData, ResponseErrorData } from '@/types/types'

// Handles HTTP POST request to retrieve a specific order from the database
export const handlePostToFilterOrder = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseErrorData>,
) => {
  try {
    const order = await getFilteredOrder(req.body.data)
    res.status(200).json(order)
  } catch (error: unknown) {
    const errorData: ResponseErrorData = { message: 'Internal Server Error. Cannot GET order.' }
    res.status(500).json(errorData)
  }
}

// Handles HTTP POST request to retrieve order items for a specific order from the database
export const handlePostToFilterOrderItems = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseErrorData>,
) => {
  try {
    const order = await getFilteredOrderItems(req.body.data)
    res.status(200).json(order)
  } catch (error: unknown) {
    const errorData: ResponseErrorData = { message: 'Internal Server Error. Cannot GET order.' }
    res.status(500).json(errorData)
  }
}

// Handles HTTP POST request to add order to the database
export const handlePostToAddOrder = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseErrorData>,
) => {
  try {
    const order = await addOrder(req.body.data)
    res.status(200).json(order)
  } catch (error: unknown) {
    const errorData: ResponseErrorData = { message: 'Internal Server Error. Cannot POST user.' }
    res.status(500).json(errorData)
  }
}

// Handles HTTP POST request to add order items to the database
export const handlePostToAddOrderItems = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseErrorData>,
) => {
  try {
    const { dogstore_order_id, product_id, quantity, total_price } = req.body.data
    const orderItems = await addOrderItems({ dogstore_order_id, product_id, quantity, total_price })
    res.status(200).json(orderItems)
  } catch (error: unknown) {
    const errorData: ResponseErrorData = { message: 'Internal Server Error. Cannot POST user.' }
    res.status(500).json(errorData)
  }
}