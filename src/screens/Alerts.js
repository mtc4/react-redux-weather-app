import React from 'react'
import { View, Text, StyleSheet, PushNotificationIOS, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Alerts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    /*
    console.log('component did mount')
    PushNotificationIOS.addEventListener('register', token => {
      console.log(token)
      Alert.alert(token)
    })
    PushNotificationIOS.addEventListener('registrationError', registrationError => {
      console.log(registrationError, '--')
    })

    PushNotificationIOS.addEventListener('notification', function(notification) {
      if (!notification) {
        return
      }
      const data = notification.getData()
      Alert.alert(JSON.stringify({ data, source: 'CollapsedApp' }))
    })

    PushNotificationIOS.getInitialNotification().then(notification => {
      if (!notification) {
        return
      }
      const data = notification.getData()
      Alert.alert(JSON.stringify({ data, source: 'ClosedApp' }))
    })
    PushNotificationIOS.requestPermissions()
*/
  }

  render() {


    return (
        <View style={styles.container}>
          <Icon name="error-outline" style={{fontSize: 40}}/>
          <Text style={styles.welcome}>Brak ostrzeżeń</Text>
          <Text style={{width: 300, marginTop: 20, justifyContent: 'center'}}>Tutaj będą pojawiac się ostrzeżenia
            meteorologiczne</Text>
        </View>
    )
  }
}



const styles = StyleSheet.create({
  welcome: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Alerts
