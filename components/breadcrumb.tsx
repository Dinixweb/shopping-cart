import {BiHomeAlt} from 'react-icons/bi'
import {MdKeyboardArrowRight, MdCompare} from 'react-icons/md'
import { IoHeartCircleOutline } from 'react-icons/io5'
import {BsMinecartLoaded} from 'react-icons/bs'
const BreadCrumb = () => {
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
                    <div className="col-3 border-end p-4"><span><MdCompare size={35} style={{marginRight:10}}/> Compare Product</span></div>
                    <div className="col-3 border-end p-4"><span><IoHeartCircleOutline size={35} style={{marginRight:10}}/>Wish List - Empty</span></div>
                    <div className="col-3 border-end p-4"><span><BsMinecartLoaded size={35} style={{marginRight:10}}/>2 Products - $1000</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BreadCrumb