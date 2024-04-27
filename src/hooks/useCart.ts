import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Product } from '@/types/types'

const useCart = () => {
  const initialCartItems = useSelector((state: RootState) => state.cart.cartItems)
  const cartItems: Product[] = []

  for (const item of initialCartItems) {
    const existingItem = cartItems.find((newItem) => newItem.id === item.id)

    if (existingItem && existingItem.quantity) {
      existingItem.quantity += 1
      existingItem.price = (Number(existingItem.price) + Number(item.price)).toString()
    } else {
      cartItems.push({ ...item, quantity: 1 })
    }
  }

  const calculateTotal = (items: Product[]) => {
    if (!Array.isArray(items)) {
      console.error('Invalid argument: items should be an array')
      return 0
    }

    const total = items.reduce((acc, item) => acc + Number(item.price), 0)
    return total.toFixed(2)
  }

  // Use useMemo to optimize performance by only recalculating the total when cartItems changes
  const total = useMemo(() => calculateTotal(cartItems), [initialCartItems])

  return { cartItems, total }
}

export default useCart

