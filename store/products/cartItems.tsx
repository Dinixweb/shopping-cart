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
            
        },
        removeCartItem: (state, action: PayloadAction<productDetails>) => {
            state.cartArr.map((check: any) => {
                if (check.defaultQty <= 1) {
                    //do nothing
                } else {
                    if (check.productId === action.payload.productId) {
                    check.defaultQty--
                }
                }
            })
        }
    }
})

export const { addToCartSlice,removeCartItem } = getCartItems.actions;
export default getCartItems.reducer