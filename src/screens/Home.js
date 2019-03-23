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
      isLoading: true,
      latitude: 50.016748, 
      longitude: 20.990469
    }

  }

  async componentDidMount() {
    await this.props.getWeatherData();
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1000);
  }

  render() {
    if (this.state.isLoading) {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Fetching...</Text>
          </View>
        )
    } 
    
    const { daily } = this.props.weather.home.data;
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>0</Text>
        <Text style={styles.welcome}>{daily.summary || "brak"}</Text>
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