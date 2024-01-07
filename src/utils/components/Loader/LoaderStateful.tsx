import React, {useEffect, useState} from 'react';
import Loader, {LoaderState} from './Loader';
import LoaderService, {LoaderCallback} from './LoaderService';
import {CustomTheme} from '../../theme/CustomTheme';

export interface Props {
  theme: CustomTheme;
}

/**
 * Loader with Own State
 * */
export const LoaderStateful: React.FC<Props> = React.memo(({theme}) => {
  // Loader State
  const [loadingState, setLoaderState] = useState<LoaderState>({
    isLoading: false,
  });

  /**
   * Loader State Listener
   * */
  const listener: LoaderCallback = ({isLoading, title}: LoaderState) => {
    // Update Loader State
    setLoaderState({
      isLoading,
      title,
    });
  };

  useEffect(() => {
    // Attach Loader Listener
    LoaderService.setCallback(listener);

    // return call when Component Destroy/Unmount
    return () => {
      // Detach Loader Listener
      LoaderService.setCallback();
    };
  }, []);

  if (!loadingState.isLoading) {
    return <></>;
  }

  return (
    <Loader
      isLoading={loadingState.isLoading}
      title={loadingState.title}
      theme={theme}
    />
  );
});
