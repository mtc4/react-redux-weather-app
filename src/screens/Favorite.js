import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
    FlatList,
  ScrollView,
} from 'react-native'
import {Navigation} from 'react-native-navigation'
import {getStyleSheet} from '../styles/'
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as FavoriteActions from "../actions/FavoriteActions";
import * as HomeActions from "../actions/HomeActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import _ from 'lodash'
import Geocoder from "react-native-geocoding";


class Favorite extends React.Component {
  constructor (props) {
    super(props)

    this.handleLocationAdd = this.handleLocationAdd.bind(this)
    this.state = {
      isLoading: true
    }
    /* temporary states [todo] */
    this.state = {
      data: []
    }
  }

  get styles () {
    return getStyleSheet(this.state.darkTheme)
  }

  async handleLocationPress(item) {
    var location = item.city + "," + item.country;
    var loc = {};
    this.setState({ isLoading: true})
    await Geocoder.from(location)
        .then(json => {
           loc = json.results[0].geometry.location
          console.log(this.props, "favvv")
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
    time = Number(time);
    let isNightMode = time >= 20 || time <= 5
    await this.props.setMode(isNightMode)
    this.setState({ isLoading: false })
    Navigation.mergeOptions(this.props.componentId, {
      bottomTabs: {
        currentTabIndex: 0
      }
    });

  }

  handleLocationAdd () {
    Navigation.push('App', {
      component: {
        name: 'LocationModal',
        options: {
          topBar: {
            title: {
              text: 'Dodaj lokalizacje'
            }
          }
        }
      }
    });
  }

  handleLocationDelete (data) {
    this.props.deleteFavoriteLocation(data)
  }

  renderRow = ({ item }) => {
    return (
        <View style={this.styles.loc_item} key={_.uniqueId('favorite-')}>
          <TouchableOpacity onPress={() => this.handleLocationPress(item)}>
            <Text style={this.styles.loc_text}>
              {item.city}
            </Text>
            <Text>{item.country.trim()}</Text>
          </TouchableOpacity>
          <Icon.Button active name={"delete-forever"} onPress={() => this.handleLocationDelete(item)} style={this.styles.loc_remove_icon} size={40} color={"#FF6D55"} backgroundColor={"transparent"}/>
        </View>
    );
  };

  renderFavorites() {
    const { locations } = this.props;
    if (!locations || locations.length === 0) return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={{ margin: 30, alignSelf: 'center'}}>Brak zapisanych lokalizacji. Kliknij 'Dodaj lokalizacje', aby dodać do listy.</Text></View>)

   return (<FlatList
        style={this.styles.loc_content}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        data={this.props.locations ? locations.favorite : []}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
    />)
  }

  componentDidMount () {
    this.setState({ isLoading: false })
  }

  render () {
    //var listData = [{ city: "Rzeszów", country: "Poland" }, { city: "New York", country: "United States" }, { city: "Bali", country: "Indonesia" }, ];


    if (this.state.isLoading) {
       return (
           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
             <ActivityIndicator siZe={"large"} color={"black"} />
           </View>
       )
    }
    return (
      <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
        {/* Navigation Menu */}

        <View style={ this.styles.nav_content}>

          <View style={this.styles.nav_item}>
            <Icon active name={"map"} size={40} color={"#aeaeae"}/>
            <Text style={this.styles.text}>Globalne Warunki Pogodowe</Text>
          </View>

          <TouchableOpacity onPress={this.handleLocationAdd}>
            <View style={this.styles.nav_item}>
              <Icon active name={"add-circle-outline"} style={ this.styles.icon } size={40} color={"#aeaeae"}/>
              <Text style={this.styles.text}>Dodaj lokalizacje</Text>

            </View>
          </TouchableOpacity>

        </View>

        {/* Locations List */}


            {this.renderFavorites()}

      </ScrollView>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    weather: state.home.weather,
    locations: state.favorite,
    location: state.location
  }
}

const mapDispatchToProps = (dispatch) => {
  const { addFavoriteLocations, deleteFavoriteLocation } = FavoriteActions
  const { getWeatherData, setLocation, setMode } = HomeActions

  return {
    ...bindActionCreators({ addFavoriteLocations, getWeatherData, setLocation, setMode, deleteFavoriteLocation }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite)
