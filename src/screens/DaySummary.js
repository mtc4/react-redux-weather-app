import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import { Navigation } from 'react-native-navigation'

class DaySummary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Dzień X'
        },
      }
    };
  }
  componentDidMount () {
    console.log(this.props)
    this.setState({ isLoading: false })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Szczegółowa pogoda</Text>
        <Button onPress={() => Navigation.pop(this.props.componentId)} title="Go Back"/>
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

export default DaySummary
