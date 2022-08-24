const SingleProduct = () => {
    return (
        <div className="main">
            <div className="card">
                <div className="card-body">Image</div>
                <div className="card-footer">
                    <small>Vendor Code: 1010201</small>
                    <h5>Big blue lego jeep</h5>
                    <small>collection {"<<Brutal>>"}</small>
                    <small>Price</small>
                    <div className="row">
                        <div className="col-8"><span className="fs-3">$400<small className="fs-6 ms-2"><s>$600</s></small></span></div>
                        <div className="col-4">add</div>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default SingleProduct