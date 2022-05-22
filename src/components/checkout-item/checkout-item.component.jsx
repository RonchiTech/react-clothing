import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const onClearCartHandler = () => {
    clearItemFromCart(cartItem);
  };
  const onAddItemToCartHandler = () => {
    addItemToCart(cartItem);
  };

  const onRemoveItemToCartHandler = () => {
    removeItemToCart(cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={onRemoveItemToCartHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={onAddItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={onClearCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
