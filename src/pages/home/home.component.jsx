import { Outlet } from 'react-router-dom';
import CategoryList from '../../components/categories/category-list/category-list.component';
// import CategoryItem from './components/categories/category-item/category-item.component';
// import './categories.styles.scss';

const Home = () => (
    <div>
      <CategoryList  />
      <Outlet />
    </div>
  );


export default Home;
