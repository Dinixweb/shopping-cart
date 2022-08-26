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
        //   let data =  state.cartArr.filter((cartObj:any)=>cartObj.productId===action.payload.productId)
        //     if (data.length > 0) {

        //     } else {
                state.cartArr=[...state.cartArr, action.payload]
            //}
           
        }
    }
})

export const { addToCartSlice } = getCartItems.actions;
export default getCartItems.reducer