import {LoaderState} from './Loader';

export type LoaderCallback = (state: LoaderState) => void;

/**
 * Service to Access the Loader Listener
 * */
class LoaderService {
  private static callback?: LoaderCallback;

  /**
   * Set Callback Listener
   * */
  static setCallback(callback?: LoaderCallback) {
    LoaderService.callback = callback;
  }

  /**
   * Notify to Show Loading
   *
   * @param title Title for Loader
   * */
  static show(title?: string) {
    LoaderService.callback?.({isLoading: true, title});
  }

  /**
   * Notify to Hide Loading
   * */
  static dismiss() {
    LoaderService.callback?.({isLoading: false});
  }
}

export default LoaderService;
