import type { NextApiRequest, NextApiResponse } from "next"
import { handlePostToAddOrder, handlePostToAddOrderItems, handlePostToFilterOrder, handlePostToFilterOrderItems } from "@/apis/orders/ordersController"
import { ResponseData, ResponseErrorData } from "@/types/types"

const ordersHandler = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseErrorData>,
) => {
  if (req.method === 'POST') {
    if (req.body.type === 'add order') {
      handlePostToAddOrder(req, res)
    } else if (req.body.type === 'add order items') {
      handlePostToAddOrderItems(req, res)
    } else if (req.body.type === 'get order') {
      handlePostToFilterOrder(req, res)
    } else if (req.body.type === 'get order items') {
      handlePostToFilterOrderItems(req, res)
    } else {
      res.status(400).json({ message: 'Invalid request type' })
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

export default ordersHandler