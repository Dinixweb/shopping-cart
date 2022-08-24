import { createSlice } from '@reduxjs/toolkit'
import { cartItem } from '../../interfaces/cartItems';


const getCartItems = createSlice({
    name: "cartData",
    initialState: [],
    reducers: {
        cartItems: (state:unknown, action:unknown) => {
            
        }
    }
})

export const { cartItems } = getCartItems.actions;
export default getCartItems.reducer