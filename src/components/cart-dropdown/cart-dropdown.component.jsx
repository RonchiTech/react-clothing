import Button from '../buttons/button.component';
import './cart-dropdown.styles.scss'
const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button type="button" buttonType="inverted">
        Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;