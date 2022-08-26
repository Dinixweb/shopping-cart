import SingleProduct from './singleproduct';
import { useAuth } from '../../hooks/useContext';
import { productDetails, productList } from '../../interfaces/cartItems';
import { useState, useEffect } from 'react';
import axios from 'axios';
const ProductList = () => {
  const [productsList, setProductList] = useState<productDetails[] | []>([]);
  const { productsItems, setCart,cart } = useAuth();
  useEffect(() => {
    const GetPorducts = async () => {
      const response = await axios.get(` http://localhost:3500/products`);
      setProductList(response.data);
    };
    GetPorducts();
  }, [productsItems, setProductList]);

    const addToCart = (product: productDetails) => {
        setCart([...cart, product])
        console.log("cart",cart)
  };
  return (
    <div className="main d-flex flex-wrap gap-5">
      {productsList.map((item) => {
        return (
          <SingleProduct
            key={item.productId}
            product={item}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
};
export default ProductList;
