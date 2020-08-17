import {StyleSheet} from 'react-native';
import {addColor} from '../../Global';

const styles = StyleSheet.create({
  absoluteFloat: {
    backgroundColor: addColor,
    position: 'absolute',
    top: 700,
    bottom: 10,
    right: 10,
    width: 40,
    height: 40,
    zIndex: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
