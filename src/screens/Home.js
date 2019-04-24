import React, { Component } from 'react'
import { View, Text, Image, ActivityIndicator, SafeAreaView, Button, ScrollView, RefreshControl } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as HomeActions from '../actions/HomeActions'
import { Navigation } from 'react-native-navigation'
import { getStyleSheet } from '../styles/'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { WeatherImages } from '../components/Home/WeatherBackground'
import Tiles from '../components/Home/Tiles'
import Week from '../components/Home/Week'
import Geocoder from 'react-native-geocoding'
Geocoder.init('-')

class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      latitude: 50.016748,
      longitude: 20.990469,
      darkTheme: false,
      refreshing: false
    }

    Navigation.events().bindComponent(this)
    this._onRefresh = this._onRefresh.bind(this)

    /*
    Geocoder.from("Tarnow")
      .then(json => {
        var location = json.results[0].geometry.location
        this.setState({ latitude: location.lat, longitude: location.lng })
      })
      .catch(error => console.warn(error))
      */
  }

  get styles () {
    return getStyleSheet(this.props.mode)
  }

  async componentDidMount () {
    setTimeout(() => {
      this.props.setMode(false)
      this.setState({ isLoading: false })
    }, 1000)
  }

  async _onRefresh () {
    await this.props.getWeatherData()
  }

  render () {
    console.log(this.props)
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <ActivityIndicator size="large" color="#000" style={{alignSelf: 'center'}}/>
        </View>
      )
    }

    const { hourly, currently } = this.props.weather
    return (
      <ScrollView
        style={this.styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        <View style={this.styles.weather_info}>
          <Image
            source={WeatherImages.background[currently.icon]}
            style={this.styles.backgroundImage}
          />

          <Text style={this.styles.weather_info__temperature}>{currently.apparentTemperature.toFixed()}°</Text>
          <Text style={this.styles.weather_info__location}>Tarnow, Poland <Icon name="location-on" color="#4F8EF7" style={this.styles.weather_info__location_pin} /></Text>
          <Text style={this.styles.weather_info__description}>{hourly.summary}  {currently.icon}</Text>
        </View>

        { /* Kafelki */ }
        <Tiles
          daily={this.props.weather.daily}
          styles={this.styles}
        />

        <Week
          daily={this.props.weather.daily}
          styles={this.styles}
        />

      </ScrollView>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.home.weather,
    mode: state.mode
  }
}

const mapDispatchToProps = (dispatch) => {
  const { getWeatherData, setMode } = HomeActions
  return {
    ...bindActionCreators({ getWeatherData, setMode }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
