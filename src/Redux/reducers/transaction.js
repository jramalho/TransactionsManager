import {ADD_TRANSACTION, REMOVE_TRANSACTION} from '../constants/index';

const initialState = [];

const TransactionReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TRANSACTION:
      return [...state, payload];
    case REMOVE_TRANSACTION:
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
};

export default TransactionReducer;
