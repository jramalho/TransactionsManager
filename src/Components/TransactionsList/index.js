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
        style={styles.removeButton}
        onPress={() => dispatch(removeTransaction(id))}>
        <Text>X</Text>
      </Pressable>
    </View>
  );
};

const TransactionsList = ({}) => {
  const transactionsData = useSelector((state) => state.transactions);
  return (
    <FlatList
      data={transactionsData}
      scrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
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
      ListEmptyComponent={
        <Text style={{width: '100%', textAlign: 'center'}}>
          Adicione uma transação
        </Text>
      }
      ListHeaderComponent={<View style={{height: 20, width: '100%'}} />}
      ListFooterComponent={<View style={{height: 40, width: '100%'}} />}
    />
  );
};

export default TransactionsList;
