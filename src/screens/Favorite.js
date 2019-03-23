import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class Favorite extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
   
    this.setState({isLoading: false});
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Favorite</Text>
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

export default Favorite;