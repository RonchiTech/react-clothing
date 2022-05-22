import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';
import Button from '../buttons/button.component';

import './cart-dropdown.styles.scss';
const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const goToCheckout = () => {
    navigate('/checkout');
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>

      <Button type="button" buttonType="inverted" onClick={goToCheckout}>
        Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
