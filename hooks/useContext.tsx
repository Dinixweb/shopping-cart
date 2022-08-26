import {
  useContext,
  createContext,
  useState,
  ReactNode
} from 'react';
import { productDetails, productList } from '../interfaces/cartItems';

const myContext = createContext<any | null>(null);

export function ContextProvider({ children }: { children: ReactNode }) {
  const miCartContext = CartProvider();
  return (
    <myContext.Provider value={miCartContext}>{children}</myContext.Provider>
  );
}
export const useAuth = () => {
  return useContext(myContext);
};

const CartProvider = () => {
  const [productsItems, setProductItems] = useState<productList | []>([]);
  const [cart, setCart] = useState<productList[] | []>([]);
  console.log("setCart",cart)
  return {
    productsItems,
    setProductItems,
    cart,
    setCart
  };
};
