import {
  ADD_TO_CART,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM,
  REMOVE_FROM_CART,
} from '../actions/actionTypes';

const initialState = {
  cart: [],
  currentItem: null,
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.id],
        // ...action.id,
      };

    case REMOVE_FROM_CART:
      // const existOne = state.cart.find(x => x.itemId === action.id);
      // if (existOne.qty === 1) {
      //   return state.cart.filter(x => (x.itemId === item.itemId) !== action.id);
      // } else {
      //   return state.cart.map(x =>
      //     x.itemId === action.id ? {...x, qty: x.qty - 1} : x,
      //   );
      // }

      return {
        ...state,
        cart: state.cart.filter(x => x.itemId !== action.payload.id),
      };

    case ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? {...item, qty: action.payload.qty}
            : item,
        ),
      };
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
