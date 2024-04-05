import type { NextApiRequest, NextApiResponse } from "next"
import { handleGetProducts } from "../../apis/products/productsController"
import { ResponseData, ResponseErrorData } from "@/types/types"

const phonesHandler = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseErrorData>,
) => {
  if (req.method === 'GET') {
    handleGetProducts(req, res)
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

export default phonesHandler