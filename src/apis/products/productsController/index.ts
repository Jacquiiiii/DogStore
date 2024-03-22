import type { NextApiRequest, NextApiResponse } from "next"
import { Data, ErrorData } from "@/pages/api/users"
import { getProducts } from "../productsService"

// Handles HTTP GET request to retrieve products from database
export const handleGetProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>,
) => {
  try {
    const data: Data = await getProducts()
    res.status(200).json(data)
  } catch (error) {
    const errorData: ErrorData = { message: 'Internal Server Error. Cannot GET products.' }
    res.status(500).json(errorData)
  }
}