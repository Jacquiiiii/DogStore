import styles from './ShopContent.module.css'
import Products from './Products/Products'
import { useContext, useEffect, useState } from 'react'
import { ProductCategoryContext } from '@/providers/ProductCategoryProvider'
import { productFilter } from './utils/productFilter'
import Menu from './Menu/Menu'
import { ProductsProps } from '@/types/types'

const ShopContent = ({ productsData }: ProductsProps) => {
  const { productCategory } = useContext(ProductCategoryContext)
  const [products, setProducts] = useState(productsData)

  // Sets products based on category anytime category changes
  useEffect(() => {
    const products = productFilter(productCategory, productsData)
    setProducts(products)
  }, [productCategory])

  return (
    <div className={styles.shop}>
      <Menu />
      <Products productsData={products} />
    </div>
  )
}

export default ShopContent