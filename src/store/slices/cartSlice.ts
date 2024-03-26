import { Product } from '@/pages/shop'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as Product[],
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      state.push(action.payload)
    },
    removeItemFromCart: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex((item: Product) => item.id === action.payload.id)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
    clearCart: (state) => {
      state.length = 0
    },
  },
})

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer