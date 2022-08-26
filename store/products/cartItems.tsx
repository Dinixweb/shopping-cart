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
        cartItems: (state, action: PayloadAction<productDetails>) => {
          
        }
    }
})

export const { cartItems } = getCartItems.actions;
export default getCartItems.reducer