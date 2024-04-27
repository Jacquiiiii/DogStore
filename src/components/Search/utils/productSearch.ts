import { Product } from '@/types/types'

// @TODO: If product details are updated to be more complex (i.e., include fields like brand, etc.), update this function to search those fields as well

export const productSearch = (products: Product[], keyword: string) => {
  const nameMatches = products
    // Filters out products that don't include the keyword in their name
    .filter(product => product.product_name.toLowerCase().includes(keyword.toLowerCase()))
    // Sorts remaining products by the index of the keyword in their name
    // Products with a lower index (i.e., the keyword appears earlier in their name) are considered more exact matches and are placed before products with a higher index
    .sort((a, b) => {
      const aMatch = a.product_name.toLowerCase().indexOf(keyword.toLowerCase())
      const bMatch = b.product_name.toLowerCase().indexOf(keyword.toLowerCase())

      if (aMatch === bMatch) {
        return 0
      }

      return aMatch < bMatch ? -1 : 1
    })
  
  // Returns an array of products that match the keyword
  return nameMatches
}