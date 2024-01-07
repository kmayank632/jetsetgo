import React from 'react';
import {ComponentStyle} from '../../styles/ComponentStyle';
import {KeyboardAvoidingView, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../theme/CustomTheme';
import getStyles from './styles';
import {getSafeAreaBottom, getSafeAreaTop} from '../../values/dimens';

function toNumber(value: string | number | undefined): number {
  if (value === undefined) {
    return 0;
  }

  const parsedValue = parseFloat(`${value}`);
  if (isNaN(parsedValue)) {
    return 0;
  }

  return parsedValue;
}

/**
 * Props for the Touchable component.
 */
export interface Props {
  enableTopSafeArea?: boolean;
  enableBottomSafeArea?: boolean;
  children?: React.ReactNode; // The content to be rendered inside the touchable.
  rootContainerStyle?: ComponentStyle; // Any Extra Properties for Component
  innerViewStyle?: ComponentStyle; // Any Extra Properties for Component
  customTheme?: CustomTheme; // Some Components Need to Declared at Root of Navigation, So useTheme() don't work for those cases.
}

/**
 * A cross-platform View component that uses platform specific paddings
 *
 */
const AppCompatView: React.FC<Props> = ({
  enableTopSafeArea = true,
  enableBottomSafeArea = true,
  rootContainerStyle,
  innerViewStyle,
  children,
  customTheme,
}) => {
  const theme = customTheme ?? (useTheme() as CustomTheme);
  const styles = getStyles(theme);

  let paddingTop;
  let paddingBottom;

  if (enableTopSafeArea) {
    paddingTop =
      getSafeAreaTop() + toNumber(innerViewStyle?.paddingTop as string);
  }

  if (enableBottomSafeArea) {
    paddingBottom =
      getSafeAreaBottom() + toNumber(innerViewStyle?.paddingBottom as string);
  }

  return (
    <KeyboardAvoidingView
      style={[styles.rootContainerStyle, rootContainerStyle]}
      enabled>
      <View
        style={[
          styles.innerViewStyle,
          {paddingTop, paddingBottom},
          innerViewStyle,
        ]}>
        {children}
      </View>
    </KeyboardAvoidingView>
  );
};
export default AppCompatView;
