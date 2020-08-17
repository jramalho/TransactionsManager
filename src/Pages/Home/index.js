import React, {useState} from 'react';
import {Pressable, View, Text} from 'react-native';

import Balance from '../../Components/Balance';
import TransactionsList from '../../Components/TransactionsList';
import FloatingButton from '../../Components/FloatingButton';
import ModalForm from '../../Components/ModalForm';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Balance />
      <TransactionsList />
      <FloatingButton onPress={() => setIsVisible(true)} />
      <ModalForm isVisible={isVisible} close={() => setIsVisible(false)} />
    </View>
  );
};

export default Home;
