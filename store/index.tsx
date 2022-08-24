import { configureStore } from '@reduxjs/toolkit'
import cartItems from './products/cartItems';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'

const persistConfig = {
    key: "cart",
    storage
}

const persistedReducer = persistReducer(persistConfig, cartItems);
export const store = configureStore({
    reducer: {
        cartList:persistedReducer
    },
    middleware:[thunk]
})
export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store)