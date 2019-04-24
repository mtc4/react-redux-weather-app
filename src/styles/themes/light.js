import { StyleSheet } from 'react-native'
import basic, { colors } from '../basic'

export const lightStyleSheet = StyleSheet.create({
  container: {
    ...basic.baseContainerStyles,
    backgroundColor: colors.white
  },
  box: {
    ...basic.baseBoxStyles,
    borderColor: colors.black
  },
  weather_info: {
    ...basic.weather_info,
    borderColor: '#f2f2f2'
  },
  weather_info__temperature: {
    ...basic.fontWeightBold,
    color: '#222222',
    fontSize: 82
  },
  weather_info__location: {
    ...basic.weather_info__location,
    ...basic.fontWeightMedium,
    color: '#222222'
  },
  weather_info__description: {
    ...basic.fontWeightLight,
    color: '#b3b3b3',
    top: 10,
    fontSize: 16
  },
  backgroundImage: {

  },
  changeModeBtn: {
    ...basic.darkThemeBtn,
    backgroundColor: colors.black
  },
  weather_info__location_pin: {
    ...basic.weather_info__location_pin,
    color: colors.black
  },
  info_box: {
    ...basic.info_box,
    borderWidth: 0
  },
  info_box_p: {
    ...basic.info_box_p
  },
  info_box_percentage: {
    fontSize: 17.75,
    color: colors.black
  },
  info_box_h5: {
    ...basic.info_box_h5,
    color: colors.black
  },
  info_days_box: {
    ...basic.info_days_box
  },
  info_days_title: {
    alignSelf: "center",
    fontSize: 14
  },
  pollution_icon: {
    width: 105,
    height: 105
  },
  info_days_icon: {
    ...basic.info_days_icon
  },
  info_days_temperature: {
    alignSelf: "center",
    fontSize: 20
  },
  uv_index_box: {
    backgroundColor: colors.black,
    ...basic.uv_index_box
  },
  uv_index_text: {
    color: colors.white,
    ...basic.uv_index_text,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  uv_index_low: {
    backgroundColor: colors.green,
    ...basic.uv_index_box
  },
  uv_index_medium: {
    backgroundColor: colors.yellow,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...basic.uv_index_box
  },
  uv_index_high: {
    backgroundColor: colors.orange,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...basic.uv_index_box
  },
  uv_index_very_high: {
    backgroundColor: colors.red,
    ...basic.uv_index_box
  },
  uv_index_icon: {
    ...basic.fontWeightMedium,
    fontSize: 18,
    marginRight: 5,
    color: colors.white
  },
  background: {
    backgroundColor: '#ffffff'
  },
  nav_content: {
    paddingTop: 90,
    margin: 40,
    borderBottomWidth: 1,
    paddingBottom: 26,
    borderColor: "#f2f2f2"
  },
  nav_item: {
    flexDirection: 'row',
    marginBottom: 20,
    position: "relative",
    fontWeight: "200"
  },
  text: {
    fontSize: 18,
    color: "#B0B0B0",
    marginTop: 10,
    marginLeft: 10
  },
  loc_item: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    display: "flex",
    flex: 1,
    justifyContent: 'space-between',
    fontWeight: "700",
    marginBottom: 25
  },
  loc_content: {
    marginLeft: 40,
    marginRight: 40
  },
  loc_text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  }
})
