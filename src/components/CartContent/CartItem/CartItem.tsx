import { useDispatch } from 'react-redux'
import { removeItemFromCart } from '../../../store/slices/cartSlice'
import styles from './CartItem.module.css'
import { CartItemProps } from '@/types/types'

const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useDispatch()

  // Convert the price to a fixed decimal number
  const price = Number(product.price).toFixed(2)

  return (
    <div className={styles.cartItem}>
      <div className={styles.productName}>
        <span>{product.product_name}</span>
        {product.quantity && product.quantity > 1 && 
          <span className={styles.quantity}>({product.quantity})</span>
        }
      </div>
      <div className={styles.checkout}>
        <span>${price}</span>
        <button 
          onClick={() => dispatch(removeItemFromCart(product))}
          className={styles.removeButton}
        >
          ✖️
        </button>
      </div>
    </div>
  )
}

export default CartItem