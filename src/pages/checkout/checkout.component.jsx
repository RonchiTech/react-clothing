import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout.styels.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        // const { id, name, price, quantity } = cartItem;
        // return (
        //   <div key={id}>
        //     <h3>{name}</h3>
        //     <span onClick={() => removeItemToCart(cartItem)}>(-)</span>
        //     <br />
        //     <span>{quantity} </span>
        //     <br />
        //     <span onClick={() => addItemToCart(cartItem)}>(+)</span>
        //     <br />
        //     <span>x ${price}</span>
        //   </div>
        // );
      })}
      <span className="total">Total: ${totalPrice}</span>
    </div>
  );
};

export default Checkout;
