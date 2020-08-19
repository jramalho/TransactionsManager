import React, {useState} from 'react';
import {View, TextInput, Text, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import Toast from 'react-native-simple-toast';

import styles from './styles';
import {saveTransaction} from '../../Redux/actions/transaction';
import checkTransaction from '../../Utils/CheckTransaction';

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
  const dispatch = useDispatch();

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [operation, setOperation] = useState('add');
  const [date, setDate] = useState(moment().format('DD/MM/YYYY'));

  const saveAndClose = () => {
    const check = checkTransaction({description, value, operation, date});

    if (!check) {
      return Toast.showWithGravity(
        'Por favor, verifique os dados da transação',
        Toast.LONG,
        Toast.BOTTOM,
      );
    }

    dispatch(saveTransaction({description, value, operation, date}));

    close();
  };

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
        <SaveButton onPress={saveAndClose} />
      </View>
    </Modal>
  );
};

export default ModalForm;
