import { getDataFromDb } from '../../../../db/utils/dbGet'

// Retrieves all products from the database
export const getProducts = async () => getDataFromDb('products')