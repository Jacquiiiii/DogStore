import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Product } from '@/pages/shop'

const useCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart)

  const calculateTotal = (items: Product[]) => {
    if (!Array.isArray(items)) {
      console.error('Invalid argument: items should be an array')
      return 0
    }

    const total = items.reduce((acc, item) => acc + Number(item.price), 0)
    return total.toFixed(2)
  }

  // Use useMemo to optimize performance by only recalculating the total when cartItems changes
  const total = useMemo(() => calculateTotal(cartItems), [cartItems])

  return { cartItems, total }
}

export default useCart

