import type { NextApiRequest, NextApiResponse } from "next"
import { getProducts } from "../productsService"
import { ResponseData, ResponseErrorData } from "@/types/types"

// Handles HTTP GET request to retrieve products from database
export const handleGetProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseErrorData>,
) => {
  try {
    const data: ResponseData = await getProducts()
    res.status(200).json(data)
  } catch (error) {
    const errorData: ResponseErrorData = { message: 'Internal Server Error. Cannot GET products.' }
    res.status(500).json(errorData)
  }
}