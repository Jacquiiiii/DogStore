import type { NextApiRequest, NextApiResponse } from "next"
import { handleGetProducts } from "../../apis/products/productsController"

type Data = {
  name: string
}

type ErrorData = {
  message: string
}

const phonesHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>,
) => {
  if (req.method === 'GET') {
    handleGetProducts(req, res)
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

export default phonesHandler