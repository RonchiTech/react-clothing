import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/images/logo.svg';

import './navigation.styles.scss';

const NavBar = () => {
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
          <Link className="navigation-link" to="/signIn">
            Sign In
          </Link>
          <Link className="navigation-link" to="/cart">
            Cart
          </Link>
          {/* <Link className="navigation-link"> </Link>
          <Link className="navigation-link"> </Link> */}
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default NavBar;
