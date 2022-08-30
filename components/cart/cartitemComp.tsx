import SingleCart from "./singlecart"
import { useSelector } from "react-redux"
import { useEffect,useState } from "react";
import { cart, productDetails } from "../../interfaces/cartItems";
const CartItems = () => {
    const cartArr = useSelector((state: cart) => state.cartListArr.cartArr);
      const [cartItems, setCartItems] = useState<productDetails[] | []>([]);
    const [price, setPrice] = useState<number[] | []>([])
    
    
  
    useEffect(() => {
        const uniqueId = new Set();
    let unique = cartArr.filter((q: any) => {
      const isDuplicate = uniqueId.has(q.productId);
        uniqueId.add(q.productId); 
        if (!isDuplicate) {
            return true
        } else {
            return false;
        }
        
    });
   
    setCartItems(unique);
      
    }, [cartArr, setCartItems]);
   
    return (
        <div className="cartItemsComp">
            <div className="card p-4 border-0 shadow-lg ">
                {cartItems.map((cart: productDetails) => {
                    return (
                        <div className="item border-bottom mb-3" key={cart.productId}>
                            <SingleCart key={cart.productId} cart={cart} />
                        </div>
                   )
               })}
            </div>
        </div>
    )
}
export default CartItems