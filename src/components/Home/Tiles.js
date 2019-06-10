import React, { Component } from 'react'
import { timestampToHours } from '../../utils'
import { FlatList, Text, View } from 'react-native'
import { BoxShadow } from 'react-native-shadow'
import { shadowOpt } from '../../styles'

class Tiles extends Component {
  constructor (props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
  }

  renderRow ({ item }) {
    let row = (
      <BoxShadow setting={shadowOpt}>
        <View style={this.props.styles.info_box}>
          <Text style={this.props.styles.info_box_h5}>
            {item.value}
            <Text style={this.props.styles.info_box_percentage}>{item.unit}</Text>
          </Text>
          <Text style={this.props.styles.info_box_p} numberOfLines={0.5}>
            {item.name.toUpperCase()}
          </Text>
        </View>
      </BoxShadow>
    )
    return row
  };

  get daily () {
    return this.props.daily
  }

  get today () {
    return this.daily.data[0]
  }

  get weatherData () {
    return [
      { name: 'Wschód słońca', value: timestampToHours(this.today.sunriseTime), unit: '' },
      { name: 'Zachód słońca', value: timestampToHours(this.today.sunsetTime), unit: '' },
      { name: 'Ciśnienie', value: Math.round(this.today.pressure), unit: 'hPa' },
      { name: 'Wiatr', value: this.today.windSpeed, unit: 'km/h' },
      { name: 'Zachmurzenie', value: Math.round(this.today.cloudCover * 100), unit: '%' },
      { name: 'Wilgotność', value: this.today.humidity * 100, unit: '%' },
      { name: 'Temperatura maks.', value: Math.round(this.today.temperatureHigh), unit: '°C' }]
  }

  render () {
    return (
      <FlatList
        style={this.props.styles.weather_info_boxes}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={this.weatherData}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }
}

export default Tiles
