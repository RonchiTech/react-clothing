import {CategoryContainer, BackgroundImage, CategoryBodyContainer} from './category-item.styles.jsx';

const CategoryItem = ({ category }) => {
  const {imageUrl, title } = category;

  return (
    <CategoryContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
