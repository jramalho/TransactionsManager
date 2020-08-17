import React from 'react';
import {FlatList, Text, View} from 'react-native';
import moment from 'moment';

import styles from './styles';

const data = [
  {
    id: 1,
    description: 'Adicionado Fundos',
    value: 20,
    operation: 'add',
    date: moment().format(),
  },
  {
    id: 2,
    description: 'Retirada',
    value: 30,
    operation: 'remove',
    date: moment().format(),
  },
  {
    id: 3,
    description: 'ABACAB',
    value: 30,
    operation: 'add',
    date: moment().format(),
  },
  {
    id: 4,
    description: 'Retirada',
    value: 30,
    operation: 'remove',
    date: moment().format(),
  },
  {
    id: 5,
    description: 'Retirada',
    value: 30,
    operation: 'remove',
    date: moment().format(),
  },
  {
    id: 6,
    description: 'Retirada',
    value: 30,
    operation: 'remove',
    date: moment().format(),
  },
];

const TransactionItem = ({date, description, operation, value}) => {
  return (
    <View
      style={
        operation === 'add'
          ? styles.itemAddContainer
          : styles.itemRemoveContainer
      }>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>{`R$ ${value}`}</Text>
      <Text style={styles.text}>{moment(date).format('LL')}</Text>
    </View>
  );
};

const TransactionsList = ({}) => {
  const renderItem = ({item}) => (
    <View style={{backgroundColor: 'red', height: 20, width: 20}} />
  );

  return (
    <View style={{width: '100%', height: 600}}>
      <FlatList
        data={data}
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
          />
        )}
        ListEmptyComponent={<View style={{flex: 1, backgroundColor: 'red'}} />}
      />
    </View>
  );
};

export default TransactionsList;