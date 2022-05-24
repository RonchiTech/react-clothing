import { useNavigate } from 'react-router-dom';
import {
  CategoryContainer,
  BackgroundImage,
  CategoryBodyContainer,
} from './category-item.styles.jsx';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, routes } = category;
  const navigate = useNavigate()
  const onRouteHandler = () => navigate(routes)
  return (
    <CategoryContainer onClick={onRouteHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
