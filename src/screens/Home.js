import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeActions from '../actions/HomeActions';
import { Navigation } from 'react-native-navigation';

class Home extends React.Component {

  constructor(props) {
    super(props);

    Navigation.events().bindComponent(this);

    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
    await this.props.getWeatherData();
    this.setState({isLoading: false});
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.props.getWeatherData}
          title="Refresh"
          color="#841584"
        />
        <Text style={styles.welcome}>Home Screen</Text>
        { this.props.weather && 
          <Text style={styles.welcome}>{this.props.weather.home.data}</Text>
        }
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

const mapStateToProps = (state) => {
  return {
      weather: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  const { getWeatherData } = HomeActions;
  return {
      ...bindActionCreators({ getWeatherData }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);