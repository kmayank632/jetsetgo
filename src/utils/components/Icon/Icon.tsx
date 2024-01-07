import React from 'react';
import {useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../theme/CustomTheme';
import getStyles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextStyle} from 'react-native';

export interface Props {
  /**
   * Additional styles to be applied to the icon.
   */
  iconStyle?: TextStyle | undefined;

  /**
   * Some Components Need to Declared at Root of Navigation, So useTheme() don't work for those cases.
   * */
  customTheme?: CustomTheme;
  name?: string;
  size?: number;
  color?: string;
}

/**
 * A custom Icon component that uses the 'react-native-vector-icons' library.
 */
const Icon: React.FC<Props> = ({name, size, color, iconStyle, customTheme}) => {
  // Get Styles
  const theme = customTheme ?? (useTheme() as CustomTheme);
  const styles = getStyles(theme);

  return (
    <MaterialCommunityIcons
      name={name}
      size={size ?? styles.icon.fontSize}
      color={color ?? theme.colors.drawable}
      style={iconStyle as any}
    />
  );
};

export default Icon;
