import { useDispatch } from 'react-redux'
import { removeItemFromCart } from '../../../store/slices/cartSlice'
import { Product } from '@/pages/shop'
import styles from './CartItem.module.css'

interface CartItemProps {
  product: Product
}

const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useDispatch()

  // Convert the price to a fixed decimal number
  const price = Number(product.price).toFixed(2)

  return (
    <div>
      <div>
        <span>{product.product_name} </span>
      </div>
      <div>
        <span>${price}</span>
        <button onClick={() => dispatch(removeItemFromCart(product))}>🗑️</button>
      </div>
    </div>
  )
}

export default CartItem