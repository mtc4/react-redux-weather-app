import { Navigation } from 'react-native-navigation'

export const goToSplashScreen = () => Navigation.setRoot({
    root: {
      stack: {
        id: 'Splash',
        children: [
          {
            component: {
              name: 'Splash',
            }
          }
      ],
      }
    }
  })

export const goToMainScreen = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'Home',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Pogoda',
              }
            }
          },
        },
        {
          component: {
            name: 'Favorite',
            options: {
              bottomTab: {
                text: 'Ulubione',
                fontSize: 12,
              }
            }
          },
        },
      ],
    }
  }
});
