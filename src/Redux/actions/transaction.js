import {ADD_TRANSACTION, REMOVE_TRANSACTION} from '../constants/index';
import {v4 as uuidv4} from 'uuid';

export function saveTransaction(transaction) {
  return {
    type: ADD_TRANSACTION,
    payload: {...transaction, id: uuidv4()},
  };
}

export function removeTransaction(id) {
  return {
    type: REMOVE_TRANSACTION,
    payload: id,
  };
}
