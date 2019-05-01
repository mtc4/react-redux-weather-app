import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native'
import { getStyleSheet } from '../../styles'
import * as HomeActions from "../../actions/HomeActions"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Navigation } from "react-native-navigation"
import Icon from 'react-native-vector-icons/MaterialIcons'
import {WeatherImages} from "./WeatherBackground";
import { goToFavorite } from "../../../navigation";


class SideMenu extends Component {
  constructor (props) {
    super(props)
    this.handleLocationAdd = this.handleLocationAdd.bind(this)
    //Navigation.events().bindComponent(this)
  }
  async componentDidMount () {
    this.navigationEventListener = Navigation.events().bindComponent(this)
  }

  uvIndexLevel (index) {
    if (index <= 2) return "low"
    if (index >= 3 && index <= 5) return "medium"
    if (index >= 6 && index <= 7) return "high"
    if (index >= 8) return "very_high"
  }

  get styles () {
    return getStyleSheet(true)
  }

  handleLocationAdd () {

    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          enabled: false
        }
      }
    });

    Navigation.push('App',{
      component: {
        name: 'LocationModal'
      }
      })
  }

  toggleTheme = () => {
    console.log(this.props, 'propsyyyyy')
    this.props.setMode(!this.props.mode)
  };
  render () {
    return (
        <View style={style.weather_side_container}>

          <View style={{display: "flex", flexDirection: 'row', alignItems: 'center', height: 90, marginTop: 60, marginLeft: 60}}>
            <Icon name={"wb-sunny"} size={50}/>
            <Text style={{marginLeft: 10, fontWeight: "bold", fontSize: 18}}>Pogoda</Text>
          </View>


          <View>
            <View style={style.weather_side_functions_label}>
              <Text>Funkcje</Text>
            </View>
            <Icon.Button name="search" onPress={this.handleLocationAdd} color={"#BFBFBF"} backgroundColor={"transparent"} style={style.functions_option}>
              <Text>Szukaj</Text>
            </Icon.Button>
            <Icon.Button name="inbox" color={"#BFBFBF"} backgroundColor={"transparent"} style={style.functions_option}>
              <Text>
                Wiadomości pogodowe
              </Text>
              <View style={style.messages_badge}>
                <Text style={style.badge_text}>5</Text>
              </View>
            </Icon.Button>
            <Icon.Button name="settings" color={"#BFBFBF"} backgroundColor={"transparent"} style={style.functions_option}>
              <Text>Ustawienia</Text>
            </Icon.Button>
          </View>

          <View>
            <View style={style.weather_side_functions_label}>
              <Text>Ostatnie lokalizacje</Text>
            </View>
            <Button fontSize={"14"} color="#E4E4E4" title="Tarnow, Poland"/>
            <Icon.Button name="inbox" color={"black"} backgroundColor={"transparent"} style={style.functions_option}>
              <Text>Wiadomości pogodowe</Text>
            </Icon.Button>
            <Icon.Button name="settings" color={"black"} backgroundColor={"transparent"} style={style.functions_option}>
              <Text>Ustawienia</Text>
            </Icon.Button>
          </View>
        </View>

    )
    /*
    return (
      <View style={{ zIndex: 1000, backgroundColor: 'transparent', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 50 }}>
        <Text>dsfdsf</Text>
        <Icon.Button name={this.name} color={this.color} onPress={this.toggleTheme}>
          <Text style={ this.color }>{this.props.mode ? "Włącz tryb dzienny" : "Włącz tryb nocny"}</Text>
        </Icon.Button>
        <View style={this.styles[`uv_index_${this.uvIndexLevel(3)}`]}>
          <Icon name="wb-sunny" style={this.styles.uv_index_icon}/>
          <Text style={this.styles.uv_index_text}>UV 3</Text>
        </View>
      </View>
    )*/
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
    color: "#BFBFBF",
    marginBottom: 10,
    marginTop: 15
  },
  functions_option: {
    height: 40,
    fontSize: 16,
    color: "black",
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
    borderRadius: 50/2,
  },
  badge_text: {
    color: 'white',
    fontWeight: 'bold'
  }
})
const mapStateToProps = (state) => {
  return {
    mode: state.mode
  }
}

const mapDispatchToProps = (dispatch) => {
  const { setMode } = HomeActions
  return {
    ...bindActionCreators({ setMode }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)
