import {CustomTheme} from '../../../utils/theme/CustomTheme';
import {ViewStyle} from 'react-native';

export interface Styles {
  container: ViewStyle;
}

/**
 * Returns the styles for Icon component
 * @param {CustomTheme} theme - The current theme object
 * @return {Styles} - The object containing the styles for the component
 */
const getStyles = (theme: CustomTheme): Styles => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default getStyles;
