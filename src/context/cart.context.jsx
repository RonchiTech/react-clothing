import { createContext, useReducer } from 'react';
import { createAction } from '../utils/actionReducer.util';
const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

const ACTION_TYPES = {
  ADD_CART_ITEMS: 'ADD_CART_ITEMS',
  CART_COUNT: 'CART_COUNT',
  SET_CART_OPEN: 'SET_CART_OPEN',
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.ADD_CART_ITEMS:
      return { ...state, ...payload };
    case ACTION_TYPES.SET_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      return state;
  }
};

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
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
  setIsCartOpen: () => null,
  addItemToCart: () => null,
  removeItemToCart: () => null,
  clearItemFromCart: () => null,
});

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  const [{ cartCount, cartItems, isCartOpen, totalPrice }, dispatch] =
    useReducer(cartReducer, initialState);

  const setIsCartOpen = (value) => {
    dispatch(createAction(ACTION_TYPES.SET_CART_OPEN, value));
  };

  const updateCartItemsReducer = (newCartItems) => {
    //count cart total
    const newCartCount = newCartItems.reduce((total, currentValue) => {
      return total + currentValue.quantity;
    }, 0);

    const newTotalPrice = newCartItems.reduce((total, currentValue) => {
      return total + currentValue.quantity * currentValue.price;
    }, 0);

    /*dispatch new action with payload = {
      newCartItems,
      newCartTotal,
      newCartCount
    }
    */
    dispatch(
      createAction(ACTION_TYPES.ADD_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        totalPrice: newTotalPrice,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItem = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItem);
  };
  const removeItemToCart = (cartToRemove) => {
    const newCartItem = removeCartItem(cartItems, cartToRemove);
    updateCartItemsReducer(newCartItem);
  };
  const clearItemFromCart = (cartToClear) => {
    const newCartItem = clearCartItem(cartItems, cartToClear);
    updateCartItemsReducer(newCartItem);
  };

  const value = {
    isCartOpen: isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems: cartItems,
    cartCount: cartCount,
    totalPrice: totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
