import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {CartIconContainer, ItemCount, ShoppingIcon} from './cart-icon.styles';

const CartIcon = ({ ...otherProps }) => {
  const {cartCount} = useContext(CartContext);
  return (
    <CartIconContainer {...otherProps}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
