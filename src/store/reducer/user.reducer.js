const ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const initialState = {
  currentUser: null,
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
    // throw new Error(`Unhandled type ${type} in userReducer`);
  }
};
