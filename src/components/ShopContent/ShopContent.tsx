import styles from './ShopContent.module.css'
import Products from './Products/Products'
import { useEffect, useState } from 'react'
import { productFilter } from './utils/productFilter'
import Menu from './Menu/Menu'
import { ProductsProps } from '@/types/types'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const ShopContent = ({ productsData }: ProductsProps) => {
  const { productCategory } = useSelector((state: RootState) => state.product)
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