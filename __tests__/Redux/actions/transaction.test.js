import * as constants from '../../../src/Redux/constants/index';
import * as actions from '../../../src/Redux/actions/transaction';
import {v4 as uuidv4} from 'uuid';

describe('transactions actions test', () => {
  it('should call an action to save a transaction', () => {
    const id = uuidv4();

    const transaction = {
      description: 'test',
      value: 20,
      operation: 'add',
      date: '20/08/2020',
    };

    const expectedAction = {
      type: constants.ADD_TRANSACTION,
      payload: {...transaction, id},
    };

    expect(actions.saveTransaction(transaction)).toEqual(expectedAction);
  });
  it('should cann an action to remove a transaction', () => {
    const id = uuidv4();

    const expectedAction = {
      type: constants.REMOVE_TRANSACTION,
      payload: id,
    };

    expect(actions.removeTransaction(id)).toEqual(expectedAction);
  });
});
