import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cart } from '../../interfaces/cartItems';


const getCartItems = createSlice({
    name: "cartItem",
    initialState:[],
    reducers: {
        cartItems: (state, action:PayloadAction<cart>) => {
            
        }
    }
})

export const { cartItems } = getCartItems.actions;
export default getCartItems.reducer