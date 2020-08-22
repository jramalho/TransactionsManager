import React, {useState} from 'react';

import Balance from '../../Components/Balance';
import TransactionsList from '../../Components/TransactionsList';
import AddButton from '../../Components/AddButton';
import ModalForm from '../../Components/ModalForm';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Balance />
      <AddButton onPress={() => setIsVisible(true)} />
      <TransactionsList />
      <ModalForm isVisible={isVisible} close={() => setIsVisible(false)} />
    </>
  );
};

export default Home;
