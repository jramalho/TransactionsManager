import {StyleSheet} from 'react-native';
import {addColor} from '../../Global';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: addColor,
    marginTop: 20,
    width: '80%',
    height: 50,
    zIndex: 200,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default styles;
