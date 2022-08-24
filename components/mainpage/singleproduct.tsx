import {MdAddShoppingCart} from 'react-icons/md'
const SingleProduct = () => {
    return (
        <div className="main">
            <div className="card rounded-1">
                <div className="card-body">Image</div>
                <div className="card-footer bg-white text-secondary">
                    <small>Vendor Code: 1010201</small>
                    <h6 className='text-danger mt-2'>Big blue lego jeep</h6>
                    <small>collection {"<<Brutal>>"}</small>
                    <h6 className='mt-3'><small >Price</small></h6>
                    <div className="row">
                        <div className="col-7 text-dark"><span className="fs-3">$400<small className="fs-6 ms-2 text-secondary"><s>$600</s></small></span></div>
                        <div className="col-5">
                            <span className='addCartButton shadow-lg'><MdAddShoppingCart color='white' size={20}/></span>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default SingleProduct