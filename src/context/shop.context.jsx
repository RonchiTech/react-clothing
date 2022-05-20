import { createContext, useState } from 'react';
import PRODUCT_DATA from '../shop-data.json';
export const ShopContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCT_DATA);
  const value = { products, setProducts };
//   useEffect(() => {
//     setProducts(PRODUCT_DATA);
//   }, []);
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
