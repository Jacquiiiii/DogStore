import { Product, ProductState } from '@/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ProductState = {
  products: [] as Product[],
  productCategory: 'all',
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductCategory: (state, action: PayloadAction<string>) => {
      state.productCategory = action.payload
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
  },
})

export const { setProductCategory, setProducts } = productSlice.actions
export default productSlice.reducer
