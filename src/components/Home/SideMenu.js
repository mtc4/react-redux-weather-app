import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { getStyleSheet } from '../../styles'
import * as HomeActions from '../../actions/HomeActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as FavoriteActions from '../../actions/FavoriteActions'
import _ from 'lodash'
import Geocoder from 'react-native-geocoding'

class SideMenu extends Component {
  constructor (props) {
    super(props)
    this.handleLocationAdd = this.handleLocationAdd.bind(this)
    this.handleWeatherConditionsClick = this.handleWeatherConditionsClick.bind(this)
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  async componentDidMount () {
    this.navigationEventListener = Navigation.events().bindComponent(this)
  }

  uvIndexLevel (index) {
    if (index <= 2) return 'low'
    if (index >= 3 && index <= 5) return 'medium'
    if (index >= 6 && index <= 7) return 'high'
    if (index >= 8) return 'very_high'
  }

  get styles () {
    return getStyleSheet(true)
  }
  handleWeatherConditionsClick () {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: false
        }
      }
    })

    Navigation.push('App', {
      component: {
        name: 'Alerts'
      }
    })
  }


  test (n: number) {
    return n
  }

  async handleLocationPress (item) {
    var location = item.city + ',' + item.country
    var loc = {}
    this.setState({ isLoading: true })
    await Geocoder.from(location)
      .then(json => {
        loc = json.results[0].geometry.location
        console.log(this.props, 'favvv')
      })
      .catch(error => console.warn(error))

    await this.props.getWeatherData(loc.lat, loc.lng)
    await this.props.setLocation(item)

    var options = {
      timeZone: this.props.weather.timezone,
      hour: 'numeric'
    }
    var formatter = new Intl.DateTimeFormat([], options)
    let time = formatter.format(new Date())
    time = Number(time)
    let isNightMode = time >= 20 || time <= 5
    await this.props.setMode(isNightMode)
    this.setState({ isLoading: false })
    Navigation.mergeOptions(this.props.componentId, {
      bottomTabs: {
        currentTabIndex: 0
      }
    })
  }

  handleLocationAdd () {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: false
        }
      }
    })

    Navigation.push('App', {
      component: {
        name: 'LocationModal'
      }
    })
  }
  renderRow = ({ item }) => {
    return (
      <View style={this.styles.loc_item} key={_.uniqueId('favorite-')}>
        <TouchableOpacity onPress={() => this.handleLocationPress(item)}>
          <Text style={this.styles.loc_text}>
            {item.city}, {item.country}
          </Text>
        </TouchableOpacity>
      </View>
    )
  };
  renderFavorites () {
    const { locations } = this.props
    if (!locations || locations.length === 0) return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text style={{ margin: 30, alignSelf: 'center' }}>Brak zapisanych lokalizacji. Kliknij 'Dodaj lokalizacje', aby dodać do listy.</Text></View>)

    return (<FlatList
      style={this.styles.loc_content}
      showsHorizontalScrollIndicator={false}
      horizontal={false}
      data={this.props.locations ? locations.favorite : []}
      renderItem={this.renderRow}
      keyExtractor={(item, index) => index.toString()}
    />)
  }

  async toggleTheme () {
    await this.props.setMode(!this.props.mode)
  };

  render () {
    return (
      <View style={style.weather_side_container}>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 90, marginTop: 60, marginLeft: 60 }}>
          <Icon name={'wb-sunny'} size={50}/>
          <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 18 }}>Pogoda</Text>
        </View>

        <View style={this.styles[`uv_index_${this.uvIndexLevel(3)}`]}>
          <Icon name="wb-sunny" style={this.styles.uv_index_icon}/>
          <Text style={this.styles.uv_index_text}>Index UV 3</Text>
        </View>

        <View>
          <View style={style.weather_side_functions_label}>
            <Text>Funkcje</Text>
          </View>
          <Icon.Button name="search" onPress={this.handleLocationAdd} color={'#BFBFBF'} backgroundColor={'transparent'} style={style.functions_option}>
            <Text>Szukaj</Text>
          </Icon.Button>
          <Icon.Button name="inbox" onPress={this.handleWeatherConditionsClick} color={'#BFBFBF'} backgroundColor={'transparent'} style={style.functions_option}>
            <Text>
                Wiadomości pogodowe
            </Text>
            <View style={style.messages_badge}>
              <Text style={style.badge_text}>5</Text>
            </View>
          </Icon.Button>
          <Icon.Button name="settings" color={'#BFBFBF'} backgroundColor={'transparent'} style={style.functions_option}>
            <Text>Ustawienia</Text>
          </Icon.Button>
          <Icon.Button name="wb-sunny" onPress={this.toggleTheme} color={'#BFBFBF'} backgroundColor={'transparent'} style={style.functions_option}>
            <Text>Tryb {this.props.mode ? 'Dzienny' : 'Nocny'}</Text>
          </Icon.Button>
        </View>

        <View>
          <View style={style.weather_side_functions_label}>
            <Text>Ostatnie lokalizacje</Text>
          </View>

          {this.renderFavorites()}
        </View>
      </View>

    )
  }
}
const style = StyleSheet.create({
  weather_side_container: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    flex: 1,
    marginLeft: 15
  },
  weather_side_functions_label: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4',
    paddingBottom: 5,
    color: '#BFBFBF',
    marginBottom: 10,
    marginTop: 15
  },
  functions_option: {
    height: 40,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    marginTop: 2,
    marginBottom: 2,
    borderWidth: 0
  },
  messages_badge: {
    backgroundColor: 'blue',
    width: 25,
    height: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    borderRadius: 50 / 2
  },
  badge_text: {
    color: 'white',
    fontWeight: 'bold'
  }
})
const mapStateToProps = (state) => {
  return {
    mode: state.mode.mode,
    weather: state.home.weather,
    locations: state.favorite,
    location: state.location
  }
}

const mapDispatchToProps = (dispatch) => {
  const { getWeatherData, setLocation, setMode } = HomeActions
  const { addFavoriteLocations, deleteFavoriteLocation } = FavoriteActions

  return {
    ...bindActionCreators({ setMode, getWeatherData, setLocation, addFavoriteLocations, deleteFavoriteLocation }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)
