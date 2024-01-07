import {CustomTheme} from '../../theme/CustomTheme';
import {BackHandler, Platform, Text, View} from 'react-native';
import getStyles from './styles';
import React, {useEffect} from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import {NavigationService} from '../../../domain/services/NavigationService';

export interface LoaderState {
  isLoading: boolean;
  title?: string;
}

/**
 * Properties for the Components
 * */
export interface Props extends LoaderState {
  theme: CustomTheme;
}

/**
 * A reusable Loader component that can be used across the application.
 * @param isLoading - If TRUE Loader will appear
 * @param title - The text to be displayed on Loader Screen.
 * @param theme - Current Applied Theme
 */
const Loader: React.FC<Props> = ({isLoading, title, theme}) => {
  if (__DEV__) {
    console.log('RENDERED: Loader');
  }

  // Get Styles
  const styles = getStyles(theme);

  /**
   * Override Back Button Press [Android Only]
   * */
  if (Platform.OS === 'android') {
    useEffect(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          // Your custom back button handling logic goes here
          // Return true to indicate that you've handled the back button press
          // Return false if you want to use the default back button behavior
          return true;
        },
      );

      // Cleanup the event listener when the component unmounts
      return () => backHandler.remove();
    }, []);
  }

  /**
   * Override Back Button Press [iOS Only]
   * */
  if (Platform.OS === 'ios') {
    // Get Navigation
    const navigation = NavigationService.get();

    if (navigation) {
      // Rest of your component code
      useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', () => {
          // Prevent the default swipe back gesture by calling e.preventDefault()
          //      e.preventDefault();
          // Your custom handling logic goes here
          // For example, you can show an alert to confirm the action before navigating back
          // If the user confirms the action, you can manually navigate back using navigation.goBack()
        });

        // Cleanup the event listener when the component unmounts
        return () => unsubscribe();
      }, [navigation]);
    }
  }

  return (
    <View style={styles.container}>
      <ProgressBar />
      <Text style={styles.loadingTitleStyle}>{title ?? 'Please wait'}</Text>
    </View>
  );
};

export default Loader;
