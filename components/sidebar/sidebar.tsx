const SideBar = () => {
return (
<div className="main">
    <div className="row ms-4 p-4">
        <div className="row main border-bottom">

            <div className="col-6">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        From</span>
                    <input type="text" className="form-control price" placeholder="$200" aria-label="$200"
                        aria-describedby="basic-addon1" />
                </div>
            </div>
            <div className="col-6">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        Up to</span>
                    <input type="text" className="form-control price" placeholder="$200" aria-label="$200"
                        aria-describedby="basic-addon1" />
                </div>
            </div>
            <div className="main d-flex justify-content-center">
                <div className="row track mb-5 w-100">

                    <div className="col-6 p-0 ">
                        <div className="price-range">
                            <input type="range" className="form-range " id="customRange1" />
                        </div>
                    </div>
                    <div className="col-6 p-0 rangeStyle">
                        <div className="price-range">
                            <input type="range" className="form-range " id="customRange1" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default SideBar