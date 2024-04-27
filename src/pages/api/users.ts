import type { NextApiRequest, NextApiResponse } from 'next'
import { handlePostToFilterUser, handlePostToAddUser } from '../../apis/users/usersController'
import { ResponseData, ResponseErrorData } from '@/types/types'

const usersHandler = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseErrorData>,
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