import type { NextApiRequest, NextApiResponse } from "next"
import bcrypt from "bcrypt"
import { addUser, getFilteredUser } from "../usersService"
import { ResponseData, ResponseErrorData } from "@/types/types"

// Handles HTTP POST request to retrieve filtered user from the database
export const handlePostToFilterUser = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseErrorData>,
) => {
  try {
    const { password } = req.body
    const user = await getFilteredUser(req.body.filters)
    const doesPasswordMatch = bcrypt.compareSync(password, user[0].password)

    !doesPasswordMatch ? 
      res.json({ message: `Passwords did not match` }) : 
      res.status(200).json({ id: user[0].id, name: user[0].first_name })
  } catch (error: unknown) {
    const errorData: ResponseErrorData = { message: 'Internal Server Error. Cannot GET user.' }
    res.status(500).json(errorData)
  }
}

// Handles HTTP POST request to add user to the database
export const handlePostToAddUser = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseErrorData>,
) => {
  try {
    const { first_name, last_name, email, password } = req.body.data
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await addUser({ first_name, last_name, email, password: hashedPassword })

    res.status(200).json({ id: user[0].id, name: user[0].first_name })
  } catch (error: unknown) {
    const errorData: ResponseErrorData = { message: 'Internal Server Error. Cannot POST user.' }
    res.status(500).json(errorData)
  }
}