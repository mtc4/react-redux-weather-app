import React from 'react'
import {
  View,
  Text,
  Button,
  Animated,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeActions from '../actions/HomeActions';
import { Navigation } from 'react-native-navigation';
import getStyleSheet from '../styles/';   

class Home extends React.Component {

  constructor(props) {
    super(props);

    Navigation.events().bindComponent(this);
    this.springValue = new Animated.Value(0.3)

    this.state = {
      isLoading: true,
      latitude: 50.016748, 
      longitude: 20.990469,
      darkTheme: false,
      refreshing: false,
    }

    this.toggleTheme = this.toggleTheme.bind(this);

  }

  async componentDidMount() {
    await this.props.getWeatherData();
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1000);
  }

  toggleTheme() {
    this.setState({darkTheme: !this.state.darkTheme})
  };

  _onRefresh() {

  }

  render() {

    const styles = getStyleSheet(this.state.darkTheme);
     const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;

    if (this.state.isLoading) {
        return (
          <View>
            <Text>Fetching...</Text>
          </View>
        )
    } 
    
    const { daily } = this.props.weather.home.data;
    
    return (
      <ScrollView 
          style={styles.container}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
            />
          }
      >
        <View style={styles.weather_info}>
          <Text style={styles.weather_info__temperature}>23°</Text>
          <Text style={styles.weather_info__location}>Tarnow, Poland</Text>
          <Text style={styles.weather_info__description}>{daily.summary}</Text>
        </View>
        <Button title={backgroundColor} onPress={this.toggleTheme}/>
      </ScrollView>
    );
  }
}

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