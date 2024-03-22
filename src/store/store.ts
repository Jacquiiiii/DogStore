import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loginReducer from './slices/loginSlice'

const persistConfig = { key: 'root', storage}
const persistedLoginReducer = persistReducer(persistConfig, loginReducer)

const store = configureStore({
  reducer: {
    login: persistedLoginReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

setupListeners(store.dispatch)

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export { store, persistor }