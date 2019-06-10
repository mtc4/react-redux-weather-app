import React, { Component } from 'react'
import { getWeekDay } from '../../utils'
import { FlatList, Image, Text, TouchableHighlight, View } from 'react-native'
import { WeatherImages } from './WeatherBackground'
import { Navigation } from 'react-native-navigation'

class Week extends Component {
  constructor (props) {
    super(props)
  }
  static get options () {
    return {
      topBar: {
        title: {
          text: 'Homesds'
        }
      }
    }
  }
  renderRow = ({ item, index }) => {
    const actualRowComponent = (
      <View style={this.props.styles.info_days_box}>
        <Text style={this.props.styles.info_days_title}>{item.day}</Text>
        <Image
          source={WeatherImages.icons.weather[item.icon]}
          style={this.props.styles.info_days_icon}
        />
        <Text style={this.props.styles.info_days_temperature}>{item.temperature}</Text>
      </View>
    )

    return (
      <TouchableHighlight
        activeOpacity={0.1}
        onPress={() => {
          Navigation.push('BottomTabsId', {
            component: {
              name: 'DaySummary',
              options: {
                animations: {
                  pop: {
                    content: {
                      alpha: {
                        from: 1,
                        to: 0,
                        duration: 300,
                        startDelay: 0,
                        interpolation: 'decelerate'
                      }
                    }
                  },
                  push: {
                    waitForRender: true,
                    content: {
                      alpha: {
                        from: 0,
                        to: 1,
                        duration: 300,
                        startDelay: 0,
                        interpolation: 'accelerate'
                      }
                    }
                  }
                }
              }
            }
          })
        }}
      >{actualRowComponent}</TouchableHighlight>
    )
  };

  get daily () {
    return this.props.daily
  }

  get temperatures () {
    let temperatures = []
    this.daily.data.forEach(element => {
      temperatures.push({
        day: getWeekDay(element.time),
        icon: element.icon,
        temperature: Math.round(element.apparentTemperatureHigh)
      })
    })
    return temperatures
  }

  render () {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={this.temperatures}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }
}

export default Week
