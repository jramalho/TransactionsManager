import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import CalculateBalance from '../../Utils/CalculateBalance';

import styles from './styles';

const Balance = ({positive = true}) => {
  const transactionsData = useSelector((state) => state.transactions);
  const balance = CalculateBalance(transactionsData);
  console.log(balance);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.balanceText}>Saldo</Text>
        <Text
          style={
            positive ? styles.positiveBalanceText : styles.negativeBalanceText
          }>
          {`R$ ${Number(balance).toFixed(2).replace('.', ',')}`}
        </Text>
      </View>
    </View>
  );
};

export default Balance;
