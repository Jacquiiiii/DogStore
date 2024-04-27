import { Product } from '@/types/types'

export const productFilter = (productCategory: string, productsData: Product[]) => {
  if (productCategory === 'bestsellers') {
    return productsData.filter(product => product.sales_count > 50)
  } 
    
  if (productCategory === 'new') {
    return productsData.filter(product => {
      const productDate = new Date(product.created_at)
      const oneMonthAgo = new Date()
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
      return productDate >= oneMonthAgo
    })
  }
  
  if (productCategory === 'deals') {
    return productsData.filter(product => product.discounted_price !== '0.00')
  }
  
  if (productCategory === 'all') {
    return productsData
  } 
      
  return productsData.filter(product => product.category === productCategory)
}