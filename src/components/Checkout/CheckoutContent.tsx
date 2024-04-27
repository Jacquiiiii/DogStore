import useCart from '@/hooks/useCart'
import styles from './CheckoutContent.module.css'
import useCheckout from '@/hooks/useCheckout'
import { useEffect } from 'react'
import Link from 'next/link'

// @@TODO: 
// Add credit card payment processing
// Add security for entering credit card details

const CheckoutContent = () => {
  const { total } = useCart()
  const { 
    handleSubmit, 
    orderSuccess, 
    setOrderSuccess, 
    orderFailure, 
    setOrderFailure,
    orderNumber
  } = useCheckout()

  // Resets order messages to false when component mounts
  useEffect(() => {
    setOrderSuccess(false)
    setOrderFailure(false)
  }, [])

  return (
    <div className={styles.checkout}>
      {orderSuccess &&
        <div className={styles.success}>
          <p>Your order was placed successfully. Your order number is #{orderNumber}.</p>
          <p>You should receive an email confirmation shortly. Please refer to our <Link className={styles.link} href='/'>shipping policies</Link> for more information.</p>
          <p className={styles.thankYou}>Thank you for shopping with the Dog Store!</p>
          <div className={styles.confirmationLinks}>
            <Link className={styles.link} href='/shop'>Continue shopping</Link>
            <Link className={styles.link} href='/'>Back to home</Link>
          </div>
        </div>
      }
      {orderFailure && 
        <p className={styles.error}>Something went wrong, please try again.</p>
      }
      {!orderSuccess &&
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type='text'
            placeholder='Enter first name'
            name='first name'
            required
          />
          <input
            className={styles.input}
            type='text'
            placeholder='Enter last name'
            name='last name'
            required
          />
          <input
            className={styles.input}
            type='email'
            placeholder='Enter email'
            name='email'
            required
          />
          <input
            className={styles.input}
            type='text'
            placeholder='Enter address'
            name='address'
            required
          />
          <input
            className={styles.input}
            type='text'
            placeholder='Enter credit card number'
            name='credit card number'
            required
          />
          <input
            className={styles.input}
            type='text'
            placeholder='Enter credit card expiry'
            name='credit card expiry'
            required
          />
          <div className={styles.totalContainer}>
            <span>Total: ${total}</span>
            <button type='submit' className={styles.payNowButton}>Submit Order</button>
          </div>
        </form>
      }
    </div>
  )
}

export default CheckoutContent