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
                 let orderDate = new Date().getTime()
                 action.payload.orderTime = orderDate
                state.cartArr=[...state.cartArr, action.payload]
            } else {
                state.cartArr.map((check: any) => {
                if (check.productId === action.payload.productId) {
                   return check.defaultQty++
                    } 
                    
                })
                let orderDate = new Date().getTime()
                 action.payload.orderTime = orderDate
                 state.cartArr=[...state.cartArr, action.payload]
            }
            
        },
        decreaseCartItems: (state, action: PayloadAction<productDetails>) => {
            state.cartArr.map((check: any) => {
                if (check.defaultQty <= 1) {
                    //do nothing
                } else {
                    if (check.productId === action.payload.productId) {
                        check.defaultQty--   
                        if (check.orderTime === action.payload.orderTime) {
                            state.cartArr =  [...state.cartArr.filter((items)=>items.orderTime !==action.payload.orderTime)]
                        }
                    }
                    
                }
            })
            
             
           
        },
        removeCartItem: (state, action: PayloadAction<productDetails>) => {
            state.cartArr =  [...state.cartArr.filter((items)=>items.productId !==action.payload.productId)]
        }

    }
})

export const { addToCartSlice,removeCartItem,decreaseCartItems } = getCartItems.actions;
export default getCartItems.reducer