import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
export const goToFavorite = (componentId) => Navigation.setRoot({
  root: {
    component: {
      name: 'LocationModal',
      passProps: {
        text: 'location'
      },
      options: {
        topBar: {
          title: {
            text: 'location modal temp'
          }
        }
      }
    }
  }
});
export const goToMainScreen = () => Navigation.setRoot({
  root: {
    sideMenu: {
      left: {
        component: {
          id: 'navigation.drawer.left',
          name: 'SideMenu',
          passProps: {
            side: 'left'
          }
        }
      },
      center: {
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
                      id: 'Home',
                      options: {
                        bottomTab: {
                          fontSize: 12,
                          text: 'Pogoda',
                          icon: require('./src/assets/img/icons/clear-day.png')
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
    }
  }
})
