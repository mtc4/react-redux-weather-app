import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { store } from '../store';

export function registerScreens() {
  Navigation.registerComponentWithRedux('Home', (sc) => require('./Home').default, Provider, store);
  Navigation.registerComponent('Favorite', (sc) => require('./Favorite').default);
  Navigation.registerComponent('Splash', (sc) => require('./Splash').default);
}