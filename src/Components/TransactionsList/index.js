import React from 'react';
import {FlatList, Text, View, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {removeTransaction} from '../../Redux/actions/transaction';

import styles from './styles';

const TransactionItem = ({id, date, description, operation, value}) => {
  const dispatch = useDispatch();
  return (
    <View
      style={
        operation === 'add'
          ? styles.itemAddContainer
          : styles.itemRemoveContainer
      }>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>{`R$ ${Number(value)
        .toFixed(2)
        .replace('.', ',')}`}</Text>
      <Text style={styles.text}>{date}</Text>
      <Pressable
        style={{
          height: 40,
          width: 40,
          backgroundColor: 'white',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => dispatch(removeTransaction(id))}>
        <Text>-</Text>
      </Pressable>
    </View>
  );
};

const TransactionsList = ({}) => {
  const transactionsData = useSelector((state) => state.transactions);
  return (
    <View style={{width: '100%', height: 1000}}>
      <FlatList
        data={transactionsData}
        ItemSeparatorComponent={() => (
          <View style={{height: 10, width: '100%'}} />
        )}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({index, item}) => (
          <TransactionItem
            key={item.id}
            date={item.date}
            description={item.description}
            operation={item.operation}
            value={item.value}
            id={item.id}
          />
        )}
        ListEmptyComponent={<Text>Adicione uma transação</Text>}
        ListHeaderComponent={<View style={{height: 10, width: '100%'}} />}
      />
    </View>
  );
};

export default TransactionsList;
