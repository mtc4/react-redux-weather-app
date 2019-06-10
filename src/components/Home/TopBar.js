import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getStyleSheet } from '../../styles'
import * as HomeActions from '../../actions/HomeActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Navigation } from 'react-native-navigation'

class TopBar extends Component {
  constructor (props) {
    super(props)
    this.toggleTheme = this.toggleTheme.bind(this)
    this.props.setMode(true)
    console.log(this.props, 'props')
    this.name = this.props.mode ? 'brightness-5' : 'brightness-2'
    this.color = this.props.mode ? '#000' : '#fff'
    Navigation.events().bindComponent(this)
  }

  uvIndexLevel (index) {
    if (index >= 8) return 'very_high'
  }

  get styles () {
    return getStyleSheet(true)
  }

  toggleTheme () {
    this.props.setMode(!this.props.mode)
  };

  render () {
    return (
      <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', zIndex: 222 }}>
        <Icon.Button name={this.name} color={this.color} backgroundColor='transparent' onPress={this.toggleTheme}>
          <Text style={ this.color }>{this.props.mode ? 'Dzień' : 'Noc'}</Text>
        </Icon.Button>
        <View style={this.styles[`uv_index_${this.uvIndexLevel(3)}`]}>
          <Icon name="wb-sunny" style={this.styles.uv_index_icon}/>
          <Text style={this.styles.uv_index_text}>UV 3</Text>
        </View>
      </View>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
