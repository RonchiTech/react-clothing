import { createContext, useState, useEffect } from 'react';
// import SHOP_DATA from '../shop-data.js';
import { getCollectionAndDocuments } from '../utils/firebase.util.js';
export const CategoriesContext = createContext({
  categoriesMap: {},
  setProducts: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});
  const value = { categoriesMap, setcategoriesMap };
  useEffect(() => {
    const run = async () => {
      const categoryMap = await getCollectionAndDocuments();
      setcategoriesMap(categoryMap);
    };
    run();
  }, []);
  //Run one time to store local data to the Firestore DB
  // useEffect(() => {
  //   // setProducts(addCollectionAndDocuments);
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
