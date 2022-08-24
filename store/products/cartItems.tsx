import { createSlice } from '@reduxjs/toolkit'
import { cartItem } from '../../interfaces/cartItems';


const getCartItems = createSlice({
    name: "cartItem",
    initialState: [],
    reducers: {
        cartItems: (state, action) => {
            
        }
    }
})

export const { cartItems } = getCartItems.actions;
export default getCartItems.reducer