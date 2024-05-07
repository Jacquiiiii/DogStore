import { Product, ProductState } from '@/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ProductState = {
  products: [],
  productSearchMatches: [],
  productCategory: 'all',
  showProduct: false,
  product: null
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
    setProductSearchMatches: (state, action: PayloadAction<Product[]>) => {
      state.productSearchMatches = action.payload
    },
    setShowProduct: (state, action: PayloadAction<boolean>) => {
      state.showProduct = action.payload
    },
    setProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload
    },
  },
})

export const { setProductCategory, setProducts, setProductSearchMatches, setProduct, setShowProduct } = productSlice.actions
export default productSlice.reducer
