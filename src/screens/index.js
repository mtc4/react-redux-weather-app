import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { store } from '../store'

export function registerScreens () {
  Navigation.registerComponentWithRedux('Home', () => require('./Home').default, Provider, store)
  Navigation.registerComponentWithRedux('Favorite', () => require('./Favorite').default, Provider, store)
  Navigation.registerComponentWithRedux('Splash', () => require('./Splash').default, Provider, store)
  Navigation.registerComponentWithRedux('Alerts', () => require('./Alerts').default, Provider, store)
  Navigation.registerComponent('DaySummary', () => require('./DaySummary').default)
  Navigation.registerComponentWithRedux('LocationModal', () => require('./LocationModal').default, Provider, store)
  Navigation.registerComponentWithRedux('TopBar', () => require('../components/Home/TopBar').default, Provider, store)
  Navigation.registerComponentWithRedux('SideMenu', () => require('../components/Home/SideMenu').default, Provider, store)
}