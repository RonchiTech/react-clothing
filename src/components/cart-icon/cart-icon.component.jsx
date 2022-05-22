import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ ...otherProps }) => {
  const {cartCount} = useContext(CartContext);
  return (
    <div className="cart-icon-container" {...otherProps}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
