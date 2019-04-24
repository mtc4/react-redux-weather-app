import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
    Button,
    FlatList,
  ScrollView,
  ListView,
} from 'react-native'
import {Navigation} from 'react-native-navigation'
import {getStyleSheet} from '../styles/'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from "@react-native-community/async-storage";
import * as FavoriteActions from "../actions/FavoriteActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

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

  handleLocationPress = (city) => {
    console.log("Wybrano ", city)
  }

  handleLocationAdd () {
    Navigation.push(this.props.componentId, {
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

  renderRow = ({ item }) => {
    return (
        <View style={this.styles.loc_item}>
          <TouchableOpacity onPress={() => this.handleLocationPress(item.city)}>
            <Text style={this.styles.loc_text}>
              {item.city}, {item.country}
            </Text>
          </TouchableOpacity>
          <Icon active name={"delete-forever"} style={this.styles.loc_remove_icon} size={40} color={"#FF6D55"}/>
        </View>
    );
  };

  componentDidMount () {
    this.setState({ isLoading: false })
    console.log(this.props, 'props')
  }

  render () {
    if(this.state.isLoading) return (<View><Text>Wczytywanie ulubionych...</Text></View>);
    //var listData = [{ city: "Rzeszów", country: "Poland" }, { city: "New York", country: "United States" }, { city: "Bali", country: "Indonesia" }, ];

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
        <FlatList
            style={this.styles.loc_content}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            data={this.props}
            renderItem={this.renderRow}
        />
      </ScrollView>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}

const mapDispatchToProps = (dispatch) => {
  const { addFavoriteLocations } = FavoriteActions
  return {
    ...bindActionCreators({ addFavoriteLocations }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite)
