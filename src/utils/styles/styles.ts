import {TextStyle} from 'react-native';
import {FontSize} from '../values/dimens';
import {FontFamily} from './fonts';

/**
 * Properties of the Component
 * */
export interface Styles {
  text: TextStyle;
}

/**
 * Generates the styles for the app.
 *
 * @return {Styles} The generated styles.
 */
const appStyles = (): Styles => ({
  text: {
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSize.NORMAL,
    includeFontPadding: false,
    verticalAlign: 'middle',
    letterSpacing: 0.6,
    textAlignVertical: 'top',
  },
});

export default appStyles();
