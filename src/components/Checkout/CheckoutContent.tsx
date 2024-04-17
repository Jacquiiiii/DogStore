import styles from './CheckoutContent.module.css'
import useCart from '@/hooks/useCart'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { clearCart } from '@/store/slices/cartSlice'

// TODO:
// Add pay now logic
// Figure out how to hide form url params
// Update schema to add user details to order
// Add types
// Move logic into hook
// Fix logged in vs not logged in logic (maybe database indicator for guest?)
// Add comments

const CheckoutContent = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { cartItems, total } = useCart()
  const loggedIn: boolean = useSelector((state: RootState) => state.login.isLoggedIn)
  const userId: string = loggedIn 
    ? useSelector((state: RootState) => state.login.userId)
    : '2'

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // const formData = new FormData(event.currentTarget)
    // const name = formData.get('name')
    // const address = formData.get('address')
    // const creditCard = formData.get('credit card number')
    // const expiry = formData.get('credit card expiry')

    try {
      const orderResponse: any = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'add order',
          data: {
            dogstore_user_id: userId,
          },
        }),
      })
      const orderData = await orderResponse.json()

      if (orderData && orderData.length > 0) {
        const orderItems: any = cartItems.map((item) => (
          {
            dogstore_order_id: orderData[0].id,
            product_id: item.id,
            quantity: item.quantity,
            total_price: item.price,
          }
        ))

        const orderItemsPromises = orderItems.map((orderItem: any) => {
          return fetch('/api/orders', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type: 'add order items',
              data: orderItem,
            }),
          })
        })
        const orderItemsResponses = await Promise.all(orderItemsPromises)

        if (
          orderItemsResponses && 
          orderItemsResponses.length === orderItemsPromises.length &&
          orderItemsResponses.every((response) => response.ok)
        ) {
          alert('Order successfully placed. Redirecting to home page.')
          dispatch(clearCart())
          router.push('/')
        } 
      } 
    } catch (error) {
      console.error('An error occurred: ', error)
      alert('Something went wrong, please try again.')
    }
  }

  return (
    <div className={styles.checkout}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="name"
          placeholder="Enter full name"
          name="name"
        />
        <input
          className={styles.input}
          type="address"
          placeholder="Enter address"
          name="address"
        />
        <input
          className={styles.input}
          type="credit card number"
          placeholder="Enter credit card number"
          name="credit card number"
        />
        <input
          className={styles.input}
          type="credit card expiry"
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