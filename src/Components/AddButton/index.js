import React from 'react';
import {Text, Pressable} from 'react-native';

import styles from './styles';

const FloatingButton = ({onPress}) => {
  return (
    <Pressable style={styles.buttonStyle} onPress={onPress}>
      <Text style={{fontSize: 20}}>Nova transação</Text>
    </Pressable>
  );
};

export default FloatingButton;
