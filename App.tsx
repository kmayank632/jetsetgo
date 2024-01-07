import React from 'react';
import {Navigation} from './src/presentation/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

/**
 * The main component of the application.
 *
 * @returns The rendered application.
 */
export default function App() {
  // Wrap the application with SafeAreaProvider to ensure content is displayed correctly within safe areas of the device screen.
  return (
    <>
      <SafeAreaProvider>
        {/* Render the navigation component */}
        <Navigation />
      </SafeAreaProvider>
    </>
  );
}
