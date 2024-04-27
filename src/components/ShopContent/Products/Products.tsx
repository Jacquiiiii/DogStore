import styles from './Products.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '@/store/slices/cartSlice'
import { ProductsProps } from '@/types/types'
import { RootState } from '@/store/store'

const Products = ({ productsData }: ProductsProps) => {
  const dispatch = useDispatch()
  const productSearchMatches = useSelector((state: RootState) => state.product.productSearchMatches)

  const productsToDisplay = productSearchMatches.length > 0 ? productSearchMatches : productsData

  return (
    <div className={styles.products}>
      {productsToDisplay.map((product) =>
        <div className={styles.product}>
          <img src={product.src} alt={product.product_name} className={styles.productImage} />
          <div className={styles.productInfo}>
            <h3 className={styles.name}>{product.product_name}</h3>
            <p className={styles.description}>{product.description}</p>
            <div>
              {product.discounted_price !== '0.00' ? 
                <div className={styles.buyContainer}>
                  <div className={styles.prices}>
                    <p className={styles.discountedPrice}>
                      ${product.discounted_price}
                    </p>
                    <p className={styles.strikedPrice}>${product.price}</p>
                  </div>
                  <button 
                    className={styles.addToCart} 
                    onClick={() => dispatch(addItemToCart(product))}
                  >
                    Add to cart
                  </button>
                </div>
                :
                <div className={styles.buyContainer}>
                  <p className={styles.price}>${product.price}</p>
                  <button 
                    className={styles.addToCart} 
                    onClick={() => dispatch(addItemToCart(product))}
                  >
                    Add to cart
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products