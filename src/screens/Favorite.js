import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
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

  handleLocationPress = (item) => {
    console.log("Wybrano ", item.city)
    var location = item.city + "," + item.country;
    Geocoder.from(location)
        .then(json => {
          var loc = json.results[0].geometry.location
          console.log(loc)
          this.props.getWeatherData(loc.lat, loc.lng)
          this.props.setLocation(item)
        })
        .catch(error => console.warn(error))

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
              {item.city}, {item.country}
            </Text>
          </TouchableOpacity>
          <Icon.Button active name={"delete-forever"} onPress={() => this.handleLocationDelete(item)} style={this.styles.loc_remove_icon} size={40} color={"#FF6D55"}/>
        </View>
    );
  };

  renderFavorites() {
    const { locations } = this.props;
    if (!locations) return (<View><Text>none</Text></View>)


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
    console.log(this.props, 'props')
  }

  render () {
    if(this.state.isLoading) return (<View><Text>Wczytywanie ulubionych...</Text></View>);
    //var listData = [{ city: "Rzeszów", country: "Poland" }, { city: "New York", country: "United States" }, { city: "Bali", country: "Indonesia" }, ];

    console.log(this.props, 'prosp 222')
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
  const { getWeatherData, setLocation } = HomeActions

  return {
    ...bindActionCreators({ addFavoriteLocations, getWeatherData, setLocation, deleteFavoriteLocation }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite)
