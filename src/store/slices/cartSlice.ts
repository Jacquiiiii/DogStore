import { Product } from '@/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialCartState = {
  cartItems: [] as Product[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      state.cartItems.push(action.payload)
    },
    removeItemFromCart: (state, action: PayloadAction<Product>) => {
      const index = state.cartItems.findIndex((item: Product) => item.id === action.payload.id)
      if (index !== -1) {
        state.cartItems.splice(index, 1)
      }
    },
    clearCart: (state) => {
      state.cartItems.length = 0
    },
  }
})

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer