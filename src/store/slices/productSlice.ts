import { ProductState } from '@/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ProductState = {
  productCategory: 'all',
}

export const productSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setProductCategory: (state, action: PayloadAction<string>) => {
      state.productCategory = action.payload
    },
  },
})

export const { setProductCategory } = productSlice.actions
export default productSlice.reducer
