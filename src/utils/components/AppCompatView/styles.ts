import {CustomTheme} from '../../theme/CustomTheme';
import {StyleSheet, ViewStyle} from 'react-native';

export interface Styles {
  rootContainerStyle: ViewStyle;
  innerViewStyle: ViewStyle;
}

const getStyles = (theme: CustomTheme): Styles =>
  StyleSheet.create({
    rootContainerStyle: {
      flex: 1,
    },
    innerViewStyle: {
      flex: 1,
    },
  });

export default getStyles;
