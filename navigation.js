import { Navigation } from 'react-native-navigation'

export const goToMainScreen = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
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
                      icon: require('./src/assets/img/icons/clear-day.png')
                    },
                    topBar: {
                      drawBehind: true,
                      title: {
                        text: "1"
                      }
                    }
                  }
                }
              },
              {
                component: {
                  name: 'Favorite',
                  options: {
                    bottomTab: {
                      text: 'Ulubione',
                      fontSize: 12,
                      icon: require('./src/assets/img/icons/wind.png')
                    },
                    topBar: {
                      drawBehind: true,
                      title: {
                        text: "2"
                      }
                    }
                  }
                }
              },
              {
                component: {
                  name: 'Alerts',
                  options: {
                    bottomTab: {
                      text: 'Ostrzezenia',
                      fontSize: 12,
                      icon: require('./src/assets/img/icons/thunderstorm.png')
                    },
                    topBar: {
                      drawBehind: true,
                      title: {
                        text: "3"
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }
})
