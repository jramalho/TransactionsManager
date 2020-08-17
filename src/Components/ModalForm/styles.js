import {StyleSheet} from 'react-native';
import {bgColor, successColor, errorColor} from '../../Global';

const operationButton = {
  height: 40,
  width: '40%',
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    height: 400,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ACACAC',
    width: '90%',
  },
  itemStyle: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  operationAddButton: {
    ...operationButton,
    backgroundColor: successColor,
  },
  operationRemoveButton: {
    ...operationButton,
    backgroundColor: errorColor,
  },
  operationSubView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  operationDisabledButton: {
    ...operationButton,
    backgroundColor: '#8F8F8F',
  },
  saveButton: {
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: successColor,
    borderRadius: 20,
  },
  labelStyle: {
    marginBottom: 4,
  },
});

export default styles;
