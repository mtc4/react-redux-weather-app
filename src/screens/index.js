import { Navigation } from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Home', (sc) => require('./Home').default);
  Navigation.registerComponent('Favorite', (sc) => require('./Favorite').default);
  Navigation.registerComponent('Splash', (sc) => require('./Splash').default);
}