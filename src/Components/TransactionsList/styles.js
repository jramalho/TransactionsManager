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
});

export default styles;
