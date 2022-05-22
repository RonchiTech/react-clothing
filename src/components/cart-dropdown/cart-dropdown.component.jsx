import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';
import Button from '../buttons/button.component';

import './cart-dropdown.styles.scss';
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button type="button" buttonType="inverted">
        Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
