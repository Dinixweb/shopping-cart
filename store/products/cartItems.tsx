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
            if (state.cartArr.length <= 0) {
                state.cartArr=[...state.cartArr, action.payload]
            } else {
                state.cartArr.map((check: any) => {
                if (check.productId === action.payload.productId) {
                    check.defaultQty++
                } else {
                    state.cartArr=[...state.cartArr, action.payload]
                }
            })
            }
            
        }
    }
})

export const { addToCartSlice } = getCartItems.actions;
export default getCartItems.reducer