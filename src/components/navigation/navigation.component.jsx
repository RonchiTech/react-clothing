import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import './navigation.styles.scss';

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  console.log('currentUser', currentUser);

  const onCartClickedHandler = () => {
    console.log('clicked');
    setIsCartOpen((prevValue) => {
      return !prevValue;
    });
  };
  return (
    <>
      <div className="navigation">
        <div className="navigation-logo-container">
          <Link className="navigation-link" to="/">
            <Logo className="logo" />
          </Link>
        </div>
        <div className="navigation-links-container">
          <Link className="navigation-link" to="/shop">
            Shop
          </Link>
          <Link className="navigation-link" to="/contact">
            Contact
          </Link>
          {currentUser ? (
            <span className="navigation-link" onClick={signOutUser}>
              Sign out
            </span>
          ) : (
            <Link className="navigation-link" to="/signIn">
              Sign In
            </Link>
          )}

          <CartIcon onClick={onCartClickedHandler} />

          {/* <Link className="navigation-link"> </Link>
          <Link className="navigation-link"> </Link> */}
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};
export default NavBar;
