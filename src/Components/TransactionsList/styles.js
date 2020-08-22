import {StyleSheet} from 'react-native';
import {successColor, errorColor} from '../../Global';

const itemContainer = {
  height: 100,
  width: '90%',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  borderRadius: 20,
};

const styles = StyleSheet.create({
  itemAddContainer: {
    ...itemContainer,
    backgroundColor: successColor,
  },
  itemRemoveContainer: {
    ...itemContainer,
    backgroundColor: errorColor,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  removeButton: {
    height: 40,
    width: 40,
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
