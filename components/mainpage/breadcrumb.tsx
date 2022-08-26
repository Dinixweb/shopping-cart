import {BiHomeAlt} from 'react-icons/bi'
import {MdKeyboardArrowRight, MdCompare} from 'react-icons/md'
import { IoHeartCircleOutline } from 'react-icons/io5'
import { BsMinecartLoaded } from 'react-icons/bs'
import { useAuth } from '../../hooks/useContext'
const BreadCrumb = () => {
    const { cart } = useAuth()
    console.log("breadCrumb",cart.length, cart)
    return (
        <div className="main">
            <div className="row">
                <div className="col-3 border-bottom p-3 border-end">
                    <span className="icon ms-5">
                        <BiHomeAlt size={23} style={{marginTop:-7}}/> <span className='fs-4'>Home <MdKeyboardArrowRight/><small className='fs-6'>Catalog</small> </span>
                    </span>
                </div>
                <div className="col-9 border-bottom">
                    <div className="row ">
                    <div className="col-4 border-end p-4"><span><MdCompare size={35} style={{marginRight:10}}/> Compare Product</span></div>
                    <div className="col-4 border-end p-4"><span><IoHeartCircleOutline size={35} style={{marginRight:10}}/>Wish List - Empty</span></div>
                    <div className="col-4 border-end p-4"><span><BsMinecartLoaded size={35} style={{marginRight:10}}/>{cart.length} Products - $ {cart.length>0?(cart.map((total: { salePrice: number })=>total.salePrice).reduce((a:number,b:number)=>a+b)):(0)}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BreadCrumb