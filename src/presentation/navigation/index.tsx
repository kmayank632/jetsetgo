import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './navigator';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {DarkTheme, LightTheme} from '../../utils/theme/themes';
import type {CustomTheme} from '../../utils/theme/CustomTheme';
import {LoaderStateful} from '../../utils/components/Loader/LoaderStateful';
import {Provider} from 'react-redux';
import {store} from '../../domain/middleware/store';

export const Navigation = () => {
  if (__DEV__) {
    console.log('RENDERED: Navigation');
  }

  const isDarkMode: boolean = useColorScheme() === 'dark';
  const theme: CustomTheme = isDarkMode ? DarkTheme : LightTheme;

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? undefined : 'height'}
        style={{
          flex: 1,
        }}>
        <NavigationContainer theme={theme}>
          <Provider store={store}>
            <Navigator />
          </Provider>
        </NavigationContainer>
      </KeyboardAvoidingView>

      {/**
       * Loader Component
       */}
      <LoaderStateful theme={theme} />
    </>
  );
};
