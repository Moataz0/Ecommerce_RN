import {
  ADD_TO_CART,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM,
  REMOVE_FROM_CART,
} from './actionTypes';

export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const removeFromCart = itemID => {
  return {
    type: REMOVE_FROM_CART,
    payload: {id: itemID},
  };
};

export const adjustQty = (itemID, value) => {
  return {
    type: ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const loadCurrentItem = item => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  };
};
