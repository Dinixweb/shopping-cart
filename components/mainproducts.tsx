import ProductList from "./productslist"
import Search from "./search"
import SideBar from "./sidebar"
ProductList
const MainProducts = () => {
    return (
        <div className="main">
            <div className="row">
                <div className="col-3 border-end">
                    <SideBar/>
                </div>
                <div className="col-9 mt-5 p-5 pt-3">
                 <div className="row"><Search/></div>
                    <div className="row mt-5">
                        <ProductList/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainProducts