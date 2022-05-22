import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../buttons/button.component';
import './product-card.styles.scss';
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const onButtonClickHandler = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container" >
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button
        type="button"
        buttonType="inverted"
        onClick={onButtonClickHandler}
      >
        Add to Cart
      </Button>
    </div>
  );
};
export default ProductCard;
