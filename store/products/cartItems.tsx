import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cart, productDetails, cartTotal } from '../../interfaces/cartItems';

//cartList
type cartDetails = productDetails[];
let cartArr: cartDetails = [];
//cart total
type cartCost = cartTotal[];
let cartTotal: cartCost = [];


const getCartItems = createSlice({
  name: 'cartItem',
  initialState: {
    cartArr,
  },
  reducers: {
    addToCartSlice: (state, action: PayloadAction<productDetails>) => {
      if (state.cartArr.length <= 0) {
        state.cartArr = [...state.cartArr, action.payload];
      } else {
        const isItemExist = state.cartArr.find((item) =>
          item.productId === action.payload.productId ? true : false
        );

        if (isItemExist) {
          state.cartArr.forEach((check: any) => {
            check.productId === action.payload.productId
              ? check.defaultQty++
              : "";
          });
        } else {
          (state.cartArr = [...state.cartArr, action.payload])
        }
      }
    },
    decreaseCartItems: (state, action: PayloadAction<productDetails>) => {
      state.cartArr.map((check: any) => {
        if (check.defaultQty <= 1) {
          //do nothing
        } else {
          if (check.productId === action.payload.productId) {
            check.defaultQty--;
          }
        }
      });
    },
    removeCartItem: (state, action: PayloadAction<productDetails>) => {
      state.cartArr = [
        ...state.cartArr.filter(
          (items) => items.productId !== action.payload.productId
        )
      ];
    },
    addToWishList: (state, action: PayloadAction<productDetails>) => {
       state.cartArr.forEach((check: productDetails) => {
            check.productId === action.payload.productId
              ? check.isSaved=true
              : false;
          });

    },
    deleteWishList: (state, action: PayloadAction<productDetails>) => {

    }
  }
});

export const { addToCartSlice, removeCartItem, decreaseCartItems, addToWishList } =
  getCartItems.actions;
export default getCartItems.reducer;
