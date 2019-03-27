import React from 'react';
import { View, Text } from 'react-native';

import { goToMainScreen } from '../../navigation'
class Splash extends React.Component {

  performTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        500
      )
    )
  }

  async componentDidMount() {
    const data = await this.performTask();

    if (data !== null) {
        goToMainScreen();
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>
          Loading...
        </Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default Splash;