import TopNav from "../components/topnav"
import BreadCrumb from "../components/mainpage/breadcrumb"
import CartItems from "../components/cart/cartitemComp"
import PriceItems from "../components/cart/priceComp"
import { useSelector } from "react-redux"
import { cart, productDetails } from "../interfaces/cartItems"
const HomePage = () => {
const cartArr = useSelector((state: cart) => state.cartListArr.cartArr);
return (
<div className="main">
        <TopNav />
        <BreadCrumb />
        <div className="row">
            <div className="col-8 cartComp p-5 border gap-5">
                 <CartItems />
            </div>
            <div className="col-4 cartPrice p-5 border gap-5">
                <PriceItems/>
            </div>
        </div>
</div>
)
}

export default HomePage