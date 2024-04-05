import styles from './CartContent.module.css'
import CartItem from './CartItem/CartItem'
import Link from 'next/link'
import useCart from '@/hooks/useCart'
import { Product } from '@/types/types'

const CartContent = () => {
  const { cartItems, total } = useCart()

  return (
    <div className={styles.cart}>
      <h2 className={styles.header}>Cart</h2>
      {cartItems.length > 0 &&
        <>
          <div className={styles.cartItems}>
            {cartItems.map((product: Product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
          <div className={styles.checkout}>
            <span>Total: ${total}</span>
            <button className={styles.checkoutButton}>Checkout</button>
          </div>
        </>
      }
      {cartItems.length === 0 &&
        <div className={styles.emptyCart}>
          <span>There are currently no items in your cart.</span>
          <Link className={styles.continueShopping} href="/shop">
            Click here to continue shopping.
          </Link>
        </div>
      }
    </div>
  )
}

export default CartContent