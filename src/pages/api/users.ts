import type { NextApiRequest, NextApiResponse } from "next"
import { handlePostToFilterUser, handlePostToAddUser } from "../../apis/users/usersController"

export type Data = {
  name: string
}

export type ErrorData = {
  message: string
}

const usersHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>,
) => {
  if (req.method === 'POST') {
    if (req.body.type === 'login') {
      handlePostToFilterUser(req, res)
    } else if (req.body.type === 'register') {
      handlePostToAddUser(req, res)
    } else {
      res.status(400).json({ message: 'Invalid request type' })
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

export default usersHandler