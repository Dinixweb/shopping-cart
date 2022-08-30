import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cart, productDetails } from '../../interfaces/cartItems';

type cartDetails = productDetails[]
let  cartArr: cartDetails = []  
const getCartItems = createSlice({
    name: "cartItem",
    initialState: {
        cartArr
    },
    reducers: {
        addToCartSlice: (state, action: PayloadAction<productDetails>) => {
            state.cartArr=[...state.cartArr, action.payload]
        }
    }
})

export const { addToCartSlice } = getCartItems.actions;
export default getCartItems.reducer