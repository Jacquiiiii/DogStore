import useCart from '@/hooks/useCart'
import styles from './CheckoutContent.module.css'
import useCheckout from '@/hooks/useCheckout'

// TODO:
// Add payment logic

const CheckoutContent = () => {
  const { handleSubmit } = useCheckout()
  const { total } = useCart()

  return (
    <div className={styles.checkout}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter first name"
          name="first name"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Enter last name"
          name="last name"
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Enter email"
          name="email"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Enter address"
          name="address"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Enter credit card number"
          name="credit card number"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Enter credit card expiry"
          name="credit card expiry"
        />
        <div className={styles.totalContainer}>
          <span>Total: ${total}</span>
          <button type="submit" className={styles.payNowButton}>Submit Order</button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutContent