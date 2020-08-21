import * as reducer from '../../../src/Redux/reducers/transaction';
import * as constants from '../../../src/Redux/constants/index';
import {v4 as uuidv4} from 'uuid';

describe('transactions reducer test', () => {
  it('should return initial state', () => {
    expect(reducer.default(undefined, {})).toEqual([]);
  });

  it('should add an transaction', () => {
    const id = uuidv4();
    const transaction = {
      description: 'test',
      value: 20,
      operation: 'add',
      date: '20/08/2020',
    };
    expect(
      reducer.default([], {
        type: constants.ADD_TRANSACTION,
        payload: {...transaction, id},
      }),
    ).toEqual([
      {
        id,
        description: 'test',
        value: 20,
        operation: 'add',
        date: '20/08/2020',
      },
    ]);
  });

  it('should remove an added transaction', () => {
    const id = uuidv4();

    const transaction = {
      description: 'remove test',
      value: 30,
      operation: 'remove',
      date: '20/08/2020',
    };

    reducer.default([], {
      type: constants.ADD_TRANSACTION,
      payload: {...transaction, id},
    });

    expect(
      reducer.default([], {
        type: constants.REMOVE_TRANSACTION,
        payload: id,
      }),
    ).toEqual([]);
  });
});
