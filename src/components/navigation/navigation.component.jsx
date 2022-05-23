import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import {
  Navigation,
  NavigationLink,
  NavigationLinksContainer,
} from './navigation.styles';

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const onCartClickedHandler = () => {
    console.log('clicked');
    setIsCartOpen((prevValue) => {
      return !prevValue;
    });
  };
  return (
    <>
      <Navigation>
        <div className="navigation-logo-container">
          <NavigationLink to="/">
            <Logo className="logo" />
          </NavigationLink>
        </div>
        <NavigationLinksContainer>
          <NavigationLink to="/shop">Shop</NavigationLink>
          <NavigationLink to="/contact">Contact</NavigationLink>
          {currentUser ? (
            <NavigationLink as={'span'} onClick={signOutUser}>
              Sign out
            </NavigationLink>
          ) : (
            <Link className="navigation-link" to="/signIn">
              Sign In
            </Link>
          )}

          <CartIcon onClick={onCartClickedHandler} />

          {/* <Link className="navigation-link"> </Link>
          <Link className="navigation-link"> </Link> */}
        </NavigationLinksContainer>
        {isCartOpen && <CartDropdown />}
      </Navigation>
      <Outlet />
    </>
  );
};
export default NavBar;
