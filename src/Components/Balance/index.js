import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Balance = ({positive = true}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.balanceText}>Saldo</Text>
        <Text
          style={
            positive ? styles.positiveBalanceText : styles.negativeBalanceText
          }>
          R$ 20,00
        </Text>
      </View>
    </View>
  );
};

export default Balance;
