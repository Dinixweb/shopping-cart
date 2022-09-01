import { MdAddShoppingCart } from 'react-icons/md'
import { AiFillHeart } from 'react-icons/ai'
import { cart, productDetails, productList, singleProduct } from '../../interfaces/cartItems'
import { useSelector, useDispatch } from 'react-redux'
import { addToWishList } from '../../store/products/cartItems'
import Image from 'next/image'
import { useEffect,useState } from 'react'
const SingleProduct = ({ product, addToCart }: singleProduct) => {
    const cartArr = useSelector((state: productList) => state.cartListArr)
    const [isSaved, setIsSaved] = useState<boolean |false>(false)
    const dispatch = useDispatch()

    const [wishArr, setWishArr]= useState<number[]|[]>([])
    const handleWishList = (productId: number) => {
        const savedItem:productDetails = {
            productId: productId,
            isSaved: true
        }
        dispatch(addToWishList(savedItem))
    }
    console.log(product)

    return (
        <div className="main singleProduct">
          
                <div className="card rounded-1 gap">
                <div className="card-head">
                    <div className='singleWishList d-flex end-0' onClick={() => handleWishList(product.productId)}>
                        <span> 
                            {product.isSaved? (<AiFillHeart size={30} color="red" />):( <AiFillHeart size={30} color="white" />)}  
                        </span>
                    </div>
                    <span>
                        <Image src={product.image} width={0} height={0} layout="responsive" className='image' alt="productImage" />
                       
                   </span>
                </div>
                <div className="card-footer bg-white text-secondary">
                    <small>Vendor Code: {product.vendorNo}</small>
                    <h6 className='text-secondary mt-2'>{product.productName}</h6>
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