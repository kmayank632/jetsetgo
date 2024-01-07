import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationScreen} from './navigationScreenMapping';
import SplashScreen from '../screens/splash';
import HomeScreen from '../screens/home';
import FlightsScreen from '../screens/flights';
import {Platform, StatusBar} from 'react-native';
import SlideLeftRightTransition from '../../utils/animations/navigationTransition';
import SelectCityScreen from '../screens/selectCity';
import SummaryScreen from '../screens/summary';

const Stack = createStackNavigator();

/**
 * Renders the Navigator component, which is responsible for navigating
 * between different screens in the app.
 *
 * @return {JSX.Element} The rendered Navigator component.
 */
export const Navigator = () => {
  return (
    // Use Stack.Navigator to create a navigator
    <Stack.Navigator
      // Define screen options for the navigator
      screenOptions={{
        headerShown: false, // Hide the header
        ...SlideLeftRightTransition, // Apply slide left/right transition animation
        headerStatusBarHeight: Platform.select({
          ios: 0,
          android: StatusBar.currentHeight,
        }),
      }}>
      <Stack.Screen name={NavigationScreen.splash} component={SplashScreen} />
      <Stack.Screen name={NavigationScreen.home} component={HomeScreen} />
      <Stack.Screen name={NavigationScreen.flights} component={FlightsScreen} />
      <Stack.Screen
        name={NavigationScreen.selectCity}
        component={SelectCityScreen}
      />
      <Stack.Screen name={NavigationScreen.summary} component={SummaryScreen} />
    </Stack.Navigator>
  );
};
