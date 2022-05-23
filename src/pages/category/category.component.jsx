import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  //   const product = categoriesMap[category];
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="title">{category.toLocaleUpperCase()}</h2>
      <div className="category-list-container">
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              category={category}
              product={product}
            />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
