import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { clearCart } from '@/store/slices/cartSlice'
import { OrderItems } from '@/types/types'
import useCart from './useCart'

const useCheckout = () => {
  const dispatch = useDispatch()
  const { cartItems } = useCart()
  const loggedIn: boolean = useSelector((state: RootState) => state.login.isLoggedIn)
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false)
  const [orderFailure, setOrderFailure] = useState<boolean>(false)
  const [orderNumber, setOrderNumber] = useState<string>('')

  // Used to indicate who placed the order, either a valid id for a logged in user or undefined for a guest user
  const userId: string | undefined = loggedIn 
    ? useSelector((state: RootState) => state.login.userId)
    : undefined

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const formDataForOrder = {
      dogstore_user_id: userId,
      customer_first_name: formData.get('first name'),
      customer_last_name: formData.get('last name'),
      customer_email: formData.get('email'),
      customer_address: formData.get('address'),
      credit_card_number: formData.get('credit card number'),
      credit_card_expiry: formData.get('credit card expiry'),
    }

    // Creates order and order items in the database
    try {
      const orderResponse = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'add order',
          data: formDataForOrder
        }),
      })
      const orderData = await orderResponse.json()

      setOrderNumber(orderData[0].id)

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
          setOrderSuccess(true)
          dispatch(clearCart())
        } 
      } 
    } catch (error) {
      console.error('An error occurred: ', error)
      setOrderSuccess(false)
      setOrderFailure(true)
    }
  }

  return { 
    handleSubmit, 
    orderSuccess, 
    setOrderSuccess, 
    orderFailure, 
    setOrderFailure, 
    orderNumber 
  }
}

export default useCheckout

