export default (transactions) => {
  let balance = 0;
  transactions.map((item) => {
    if (item.operation === 'add') {
      balance += Number(item.value);
    } else {
      balance -= Number(item.value);
    }
  });
  return balance;
};
