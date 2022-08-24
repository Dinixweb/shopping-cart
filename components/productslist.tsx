import SingleProduct from "./singleproduct"
const ProductList = () => {
    return (
        <div className="main d-flex flex-wrap gap-5">
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct/>
        </div>
    )
}
export default ProductList