import { Routes, Route } from 'react-router-dom';

import NavBar from './components/categories/navigation/navigation.component';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import SignIn from './pages/sigin/sigin-in.component';
// import CategoryItem from './components/categories/category-item/category-item.component';
// import './categories.styles.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="*" element={<h1>404: Page not found!</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
