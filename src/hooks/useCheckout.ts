import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { clearCart } from '@/store/slices/cartSlice'
import { OrderItems } from '@/types/types'
import useCart from './useCart'

const useCheckout = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { cartItems } = useCart()
  const loggedIn: boolean = useSelector((state: RootState) => state.login.isLoggedIn)

  // Used for the order. Undefined indicates order was placed by a guest.
  const userId: string | undefined = loggedIn 
    ? useSelector((state: RootState) => state.login.userId)
    : undefined

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    try {
      const orderResponse = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'add order',
          data: {
            dogstore_user_id: userId,
            customer_first_name: formData.get('first name'),
            customer_last_name: formData.get('last name'),
            customer_email: formData.get('email'),
            customer_address: formData.get('address'),
            credit_card_number: formData.get('credit card number'),
            credit_card_expiry: formData.get('credit card expiry'),
          },
        }),
      })
      const orderData = await orderResponse.json()

      if (orderData && orderData.length > 0) {
        const orderItems: OrderItems[] = cartItems.map((item) => (
          {
            dogstore_order_id: orderData[0].id,
            product_id: item.id,
            quantity: item.quantity,
            total_price: item.price,
          }
        ))

        const orderItemsPromises = orderItems.map((orderItem: OrderItems) => {
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

  return { handleSubmit }
}

export default useCheckout

