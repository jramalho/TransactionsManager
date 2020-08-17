import {StyleSheet} from 'react-native';
import {bgColor, successColor, errorColor} from '../../Global';

const currencyText = {
  fontSize: 20,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: '90%',
    backgroundColor: bgColor,
    height: '90%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 20,
  },
  positiveBalanceText: {
    ...currencyText,
    color: successColor,
  },
  negativeBalanceText: {
    ...currencyText,
    color: errorColor,
  },
});

export default styles;
