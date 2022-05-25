import { createContext, useEffect, useReducer } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase.util';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
    // throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setCurrentUser = (user) => {
    dispatch({ type: ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser: state.currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
