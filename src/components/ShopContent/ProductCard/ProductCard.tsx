import styles from './ProductCard.module.css'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '@/store/slices/cartSlice'
import { ProductProps } from '@/types/types'
import { closeModalButton } from '@/constants/constants'
import { setShowProduct } from '@/store/slices/productSlice'

// @@TODO: Add mobile styling

const ProductCard = ({ product }: ProductProps) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.productCard}>
      <div className={styles.productContainer}>
        <div className={styles.product}>
          <div className={styles.closeModalButtonContainer}>
            <button className={styles.closeModalButton} onClick={() => dispatch(setShowProduct(false))}>
              <img src={closeModalButton} className={styles.closeModalButtonImage} />
            </button>
          </div>
          <div className={styles.productInfoContainer}>
            <img src={product.src} alt={product.product_name} className={styles.productImage} />
            <div className={styles.productInfo}>
              <div className={styles.header}>
                <h3 className={styles.name}>{product.product_name}</h3>
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
              </div>
              <p className={styles.description}>{product.description}</p>
              <button 
                className={styles.addToCart} 
                onClick={() => dispatch(addItemToCart(product))}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard