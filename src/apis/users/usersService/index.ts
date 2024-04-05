import { User } from "@/types/types"
import { getDataFromDb } from "../../../../db/utils/dbGet"
import { addDataToDb } from "../../../../db/utils/dbPost"

// Retrieves user from the database filtered by params
export const getFilteredUser = async (params: User) => getDataFromDb('dogstore_users', params)

// Adds a user to the database
export const addUser = async (params: User) => addDataToDb('dogstore_users', params)