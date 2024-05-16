import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Product } from '@/types/types'

// @@TODO: Add taxes

const useCart = () => {
  const initialCartItems = useSelector((state: RootState) => state.cart.cartItems)
  const cartItems: Product[] = []

  // Iterates through state's initialCartItems to check if each item exists in cartItems and updates the quantity if so
  for (const item of initialCartItems) {
    const existingItem = cartItems.find((newItem) => newItem.id === item.id)

    if (existingItem && existingItem.quantity) {
      existingItem.quantity += 1
    } else {
      cartItems.push({ ...item, quantity: 1 })
    }
  }
  
  // Calculates the total price for one item
  const calculateItemTotal = (item: Product) => {
    const quantity = item.quantity || 1
    const price = item.discounted_price 
      ? Number(item.discounted_price) 
      : Number(item.price)
      
    return (price * quantity).toFixed(2)
  }

  // Calculates the total price of all items in cartItems
  const calculateTotal = (items: Product[]) => {
    if (!Array.isArray(items)) {
      console.error('Invalid argument: items should be an array')
      return 0
    }

    const total = items.reduce((acc, item) => {
      const quantity = item.quantity || 1
      const price = item.discounted_price 
        ? Number(item.discounted_price) 
        : Number(item.price)
        
      return acc + (price * quantity)
    }, 0)

    return total.toFixed(2)
  }

  // useMemo is used to optimize performance by only recalculating the total when cartItems changes
  const total = useMemo(() => calculateTotal(cartItems), [initialCartItems])

  return { cartItems, total, calculateItemTotal }
}

export default useCart

