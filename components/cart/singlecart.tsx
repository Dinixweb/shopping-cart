import { IoIosAdd } from 'react-icons/io'
import { HiMinusSm } from 'react-icons/hi'
import { AiFillHeart,AiFillDelete } from 'react-icons/ai'
import { productDetails, singleCart } from '../../interfaces/cartItems'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { addToCartSlice, removeCartItem,decreaseCartItems } from '../../store/products/cartItems'
const SingleCart = (cart: singleCart) => {
    const dispatch = useDispatch()
    const handleIncrease = () => {
         dispatch(addToCartSlice(cart.cart))
    }
    const handleDecrease = () => {
         dispatch(decreaseCartItems(cart.cart))
    }
    const deleteItem = () => {
        dispatch(removeCartItem(cart.cart))
    }
    return (
        <div className="main">
            <div className="row mb-4 m-2 ">
                    <div className="col-3">
                        <span className=''><Image src={cart.cart.image} width={110} height={120} alt="productImage" className='rounded'  layout="fixed"/></span>
                    </div>
                    <div className="col-6">
                        {cart.cart.productName}
                        <div className="span">
                            <small>$ {cart.cart.salePrice}</small>|
                             <small className="text-success">In Stock</small>
                        </div>
                        <div className="span">
                            <select name="" className="rounded ps-2 pe-3 me-3" defaultValue="XL">
                                <option value="">XL</option>
                                 <option value="">X</option>
                            </select>
                            <select name="" className="rounded ps-2 pe-2 me-3" defaultValue="Blue">
                                <option value="">Blue</option>
                                 <option value="">Green</option>
                            </select>
                            <button className="p-1 btn btn-primary text-light  cartButton" onClick={handleDecrease}><HiMinusSm size={21}/></button>
                            <input type="text" value={cart.cart.defaultQty} className="form-control-sm priceInput" />
                            <button className="p-1 btn btn-primary text-light cartButton" onClick={handleIncrease}><IoIosAdd size={21}/></button>
                        </div>
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-between">
                        <div className="row d-flex justify-content-end pe-3">$ {cart.cart.salePrice}</div>
                        <div className="row"><span><span className='p-2 likeDelete'><AiFillHeart/> Save</span>|<span className='p-2 likeDelete' onClick={deleteItem}><AiFillDelete/> Delete</span></span></div>
                     </div>
                </div>
        </div>
    )
}
export default SingleCart