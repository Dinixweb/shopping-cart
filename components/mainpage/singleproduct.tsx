import { MdAddShoppingCart } from 'react-icons/md'
import { cart, productDetails, productList, singleProduct } from '../../interfaces/cartItems'
import { useSelector } from 'react-redux'
const SingleProduct = ({ product, addToCart }: singleProduct) => {
    
    const cartArr = useSelector((state: productList) => state.cartList)
    console.log("redux",cartArr)
    return (
        <div className="main">
          
                <div className="card rounded-1 gap">
                <div className="card-body">Image</div>
                <div className="card-footer bg-white text-secondary">
                    <small>Vendor Code: {product.vendorNo}</small>
                    <h6 className='text-danger mt-2'>{product.productName}</h6>
                    <small>collection <strong>{product.productCat}</strong></small>
                    <h6 className='mt-3'><small >Price</small></h6>
                    <div className="row">
                        <div className="col-7 text-dark"><span className="fs-3">${product.salePrice}<small className="fs-6 ms-2 text-secondary"><s>${product.discountPrice}</s></small></span></div>
                        <div className="col-5">
                            <span className='addCartButton shadow-lg' onClick={()=>addToCart(product)}><MdAddShoppingCart color='white' size={20}/></span>
                        </div>
                   </div>
                </div>
            </div>
            
           
        </div>
    )
}
export default SingleProduct