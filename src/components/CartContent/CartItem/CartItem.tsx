import { useDispatch } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../../../store/slices/cartSlice'
import styles from './CartItem.module.css'
import { CartItemProps } from '@/types/types'
import useCart from '@/hooks/useCart'

const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useDispatch()
  const { calculateItemTotal } = useCart()

  return (
    <div className={styles.cartItem}>
      <span>{product.product_name}</span>
      <div className={styles.checkout}>
        <span>${calculateItemTotal(product)}</span>
        <div className={styles.quantityUpdater}>
          <button 
            onClick={() => dispatch(removeItemFromCart(product))}
            className={styles.removeButton}
          >
            -
          </button>
            <span className={styles.quantity}>
              {product.quantity}
            </span>
          <button 
            onClick={() => dispatch(addItemToCart(product))}
            className={styles.addButton}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem