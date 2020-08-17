import React, {useState} from 'react';
import {View, TextInput, Text, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import styles from './styles';

// {
//   id: 4,
//   description: 'Retirada',
//   value: 30,
//   operation: 'remove',
//   date: moment().format(),
// },

const ItemLabel = ({label, value, onChange, type}) => {
  return (
    <View style={styles.itemStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={onChange}
        value={value}
        keyboardType={type === 'number' ? 'number-pad' : 'default'}
      />
    </View>
  );
};

const DateItem = ({value, onChange}) => {
  return (
    <View style={styles.itemStyle}>
      <Text style={styles.labelStyle}>Data</Text>
      <DatePicker
        style={{width: '90%'}}
        customStyles={{
          dateInput: {
            borderRadius: 20,
          },
        }}
        date={value}
        mode="date"
        placeholder="Selecione uma data"
        format="DD/MM/YYYY"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        androidMode={'calendar'}
        onDateChange={(date) => onChange(date)}
      />
    </View>
  );
};

const OperationItem = ({value, onChange}) => {
  return (
    <View style={styles.itemStyle}>
      <Text style={styles.labelStyle}>Operação</Text>
      <View style={styles.operationSubView}>
        <Pressable
          style={
            value === 'add'
              ? styles.operationAddButton
              : styles.operationDisabledButton
          }
          onPress={() => onChange('add')}>
          <Text style={{color: 'white'}}>Adicionar</Text>
        </Pressable>
        <Pressable
          style={
            value === 'remove'
              ? styles.operationRemoveButton
              : styles.operationDisabledButton
          }
          onPress={() => onChange('remove')}>
          <Text style={{color: 'white'}}>Remover</Text>
        </Pressable>
      </View>
    </View>
  );
};

const SaveButton = ({onPress}) => {
  return (
    <Pressable style={styles.saveButton} onPress={onPress}>
      <Text style={{color: 'white'}}>Salvar</Text>
    </Pressable>
  );
};

const ModalForm = ({isVisible, close}) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [operation, setOperation] = useState('add');
  const [date, setDate] = useState(moment().format('DD/MM/YYYY'));

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={close}
      onBackdropPress={close}>
      <View style={styles.container}>
        <ItemLabel
          label={'Descriçao'}
          value={description}
          onChange={(desc) => setDescription(desc)}
        />
        <ItemLabel
          label={'Valor'}
          value={value}
          type={'number'}
          onChange={(val) => setValue(val)}
        />
        <OperationItem value={operation} onChange={setOperation} />
        <DateItem value={date} onChange={setDate} />
        <SaveButton onPress={close} />
      </View>
    </Modal>
  );
};

export default ModalForm;
