import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loginReducer from './slices/loginSlice'
import cartReducer from './slices/cartSlice'
import productReducer from './slices/productSlice'

const loginPersistConfig = { key: 'login', storage }
// const cartPersistConfig = { key: 'cart', storage }

const persistedLoginReducer = persistReducer(loginPersistConfig, loginReducer)
// const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer)

const store = configureStore({
  reducer: {
    login: persistedLoginReducer,
    cart: cartReducer,
    product: productReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

setupListeners(store.dispatch)

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export { store, persistor }