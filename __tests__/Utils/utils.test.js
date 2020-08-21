import checkTransaction from '../../src/Utils/CheckTransaction';
import calculateBalance from '../../src/Utils/CalculateBalance';

describe('Utils test', () => {
  it('should calculate a balance from transaction', () => {
    const testTransactions = [
      {
        description: 'test',
        value: 20,
        operation: 'add',
        date: '20/08/2020',
      },
    ];
    const expectedBalance = 20;

    expect(calculateBalance(testTransactions)).toEqual(expectedBalance);
  });
  it('should check if a valid transaction is Valid', () => {
    const testTransaction = {
      description: 'test',
      value: 20,
      operation: 'add',
      date: '20/08/2020',
    };

    const expectedValidity = true;

    expect(checkTransaction(testTransaction)).toEqual(expectedValidity);
  });
  it('should check if a Unvalid transaction is Unvalid', () => {
    const testTransaction = {
      value: 20,
      operation: 'add',
      date: '20/08/2020',
    };

    const expectedValidity = false;

    expect(checkTransaction(testTransaction)).toEqual(expectedValidity);
  });
});
