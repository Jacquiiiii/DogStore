import { Product } from '@/types/types'

export const productFilter = (productCategory: string, productsData: Product[]) => {
  // Show any product that has a sales count greater than 50
  if (productCategory === 'bestsellers') {
    return productsData.filter(product => product.sales_count > 50)
  } 
   
  // Show the 5 newest products
  if (productCategory === 'new') {
    return productsData
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 5)
  }
  
  // Show any product that has a discounted price
  if (productCategory === 'deals') {
    return productsData.filter(product => product.discounted_price !== '0.00')
  }
  
  if (productCategory === 'all') {
    return productsData
  } 
      
  return productsData.filter(product => product.category === productCategory)
}