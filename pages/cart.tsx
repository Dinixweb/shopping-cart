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
            <div className="col-lg-7 cartComp p-5 border gap-5 ">
                 <span className="d-flex justify-content-center"><CartItems /></span>
            </div>
            <div className="col-lg-4 cartPrice p-5 border border-end-0 gap-5">
               <div className="main d-flex justify-content-center"> <PriceItems/></div>
            </div>
        </div>
</div>
)
}

export default HomePage