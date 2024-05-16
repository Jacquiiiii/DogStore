import styles from './Products.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '@/store/slices/cartSlice'
import { Product, ProductsProps } from '@/types/types'
import { RootState } from '@/store/store'
import { setShowProduct } from '@/store/slices/productSlice'
import ProductCard from '../ProductCard/ProductCard'
import { useState } from 'react'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

const Products = ({ productsData }: ProductsProps) => {
  const dispatch = useDispatch()
  const productSearchMatches = useSelector((state: RootState) => state.product.productSearchMatches)
  const showProduct = useSelector((state: RootState) => state.product.showProduct)
  const productsToDisplay = productSearchMatches.length > 0 ? productSearchMatches : productsData
  const [productToDisplay, setProductToDisplay] = useState({})

  const handleModalOpen = (productData: Product) => {
    setProductToDisplay(productData)
    dispatch(setShowProduct(true))
  }

  const handleAddToCart = (product: Product, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()
    dispatch(addItemToCart(product))
  }

  console.log(productsToDisplay)

  return (
    <div className={styles.products}>
      {productsToDisplay.map((product) =>
        <button className={styles.openModalButton} onClick={() => handleModalOpen(product)} key={product.id}>
          <div className={styles.product}>
            <img src={product.src} alt={product.product_name} className={styles.productImage} />
            <h3 className={styles.name}>{product.product_name}</h3>
            <div className={styles.buyContainer}>
              {product.discounted_price !== '0.00' ? 
                <div className={styles.prices}>
                  <p className={styles.discountedPrice}>
                    ${product.discounted_price}
                  </p>
                  <p className={styles.strikedPrice}>${product.price}</p>
                </div>
                :
                <p className={styles.price}>${product.price}</p>
              }
              <button 
                className={styles.addToCart} 
                onClick={(e) => handleAddToCart(product, e)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </button>
      )}
      {showProduct && <ProductCard product={productToDisplay}/>}
    </div>
  )
}

export default Products