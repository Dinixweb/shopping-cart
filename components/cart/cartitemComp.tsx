import SingleCart from "./singlecart"
import { useSelector } from "react-redux"
import { cart, productDetails } from "../../interfaces/cartItems";
const CartItems = () => {
    const cartArr = useSelector((state: cart) => state.cartListArr.cartArr);
    return (
        <div className="cartItemsComp">
            <div className="card p-4 border-0 shadow-lg ">
                {cartArr.map((cart: productDetails) => {
                    return (
                        <div className="item border-bottom mb-3" key={cart.productId}>
                            <SingleCart key={cart.productId}/>
                        </div>
                   )
               })}
            </div>
        </div>
    )
}
export default CartItems