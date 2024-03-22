import { getDataFromDb } from "../../../../db/utils/dbGet"
import { addDataToDb } from "../../../../db/utils/dbPost"

interface UserParams {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
}

// Retrieves user from the database filtered by params
export const getFilteredUser = async (params: UserParams) => getDataFromDb('users', params)

// Adds a user to the database
export const addUser = async (params: UserParams) => addDataToDb('users', params)