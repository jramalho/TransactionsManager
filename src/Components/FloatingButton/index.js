import React from 'react';
import {Text, Pressable} from 'react-native';

import styles from './styles';

const FloatingButton = ({onPress}) => {
  return (
    <Pressable style={styles.absoluteFloat} onPress={onPress}>
      <Text>+</Text>
    </Pressable>
  );
};

export default FloatingButton;
