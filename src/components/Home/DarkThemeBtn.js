import React, { Component } from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class DarkThemeBtn extends React.Component {
  render () {
    const { darkTheme, toggleTheme, style } = this.props
    const name = darkTheme ? 'brightness-5' : 'brightness-2'
    const color = darkTheme ? '#000' : '#fff'
    return (
      <Icon.Button name={name} style={style} color={color}
        backgroundColor='transparent' onPress={toggleTheme}>
        <Text style={{ color }}>{darkTheme ? 'Dzień' : 'Noc'}</Text>
      </Icon.Button>
    )
  }
}

export default DarkThemeBtn
