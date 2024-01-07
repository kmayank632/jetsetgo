import {NavigationScreen} from '../../presentation/navigation/navigationScreenMapping';

/**
 * Navigate Service: Navigate to Screen from Anywhere
 * */
export class NavigationService {
  private static navigation?: any;

  /**
   * Get Navigation Instance
   * */
  static get(): any | null {
    return NavigationService.navigation ?? null;
  }

  /**
   * Set Navigation Instance
   * */
  static setInstance(navigation?: any) {
    NavigationService.navigation = navigation;
  }

  /**
   * Notify to Navigate to Screen
   * */
  static navigate(screenName: NavigationScreen, param?: object) {
    NavigationService.navigation?.navigate(screenName, param);
  }

  /**
   * Notify to Replace Screen
   * */
  static replace(screenName: NavigationScreen, param?: object) {
    NavigationService.navigation?.replace(screenName, param);
  }

  /**
   * Notify to Navigate to Logout
   * */
  static logout() {
    NavigationService.navigation?.replace(NavigationScreen.login);
  }

  /**
   * Notify to Navigate to Go Back
   * */
  static goBack() {
    NavigationService.navigation?.goBack();
  }
}
