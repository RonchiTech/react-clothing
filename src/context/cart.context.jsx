import { createContext, useState, useEffect } from 'react';

//Helper Function to check whether cartItem already exists or not
const addCartItem = (cartItems, productToAdd) => {
  const isItemInCart = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (isItemInCart) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === productToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, cartToRemove) => {
  //find the cart item
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartToRemove.id;
  });
  //check if the quantity is 1 then remove it
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartToRemove.id);
  }

  //return back cart items
  return cartItems.map((cartItem) => {
    if (cartItem.id === cartToRemove.id) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    } else {
      return cartItem;
    }
  });
};

const clearCartItem = (cartItems, cartToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  totalPrice: 0,
  removeItemToCart: () => null,
  clearItemFromCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCartCount(
      cartItems.reduce((total, currentValue) => {
        return total + currentValue.quantity;
      }, 0)
    );
    setTotalPrice(
      cartItems.reduce((total, currentValue) => {
        return total + currentValue.quantity * currentValue.price;
      }, 0)
    );
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemToCart = (cartToRemove) => {
    setCartItems(removeCartItem(cartItems, cartToRemove));
  };
  const clearItemFromCart = (cartToClear) => {
    setCartItems(clearCartItem(cartItems, cartToClear));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
