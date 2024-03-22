import { getDataFromDb } from '../../../../db/utils/dbGet'

// Retrieves phone data from the database
export const getProducts = async () => getDataFromDb('products')