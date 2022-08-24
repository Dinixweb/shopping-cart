import ProductCategory from "./categories"
import PriceRange from "./price"

const SideBar = () => {
return (
<div className="main">
    <div className="row ms-4 p-4">
        <PriceRange/>
        </div>
        <div className="row ms-4 p-4">
       <ProductCategory/>
    </div>
</div>
)
}
export default SideBar