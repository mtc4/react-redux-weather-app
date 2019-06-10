import { StyleSheet } from 'react-native'
import basic, { colors } from '../basic'

export const darkStyleSheet = StyleSheet.create({
  container: {
    ...basic.baseContainerStyles,
    backgroundColor: colors.black
  },
  box: {
    ...basic.baseBoxStyles,
    borderColor: colors.white
  },
  weather_info: {
    ...basic.weather_info,
    borderColor: '#383838'
  },
  weather_info__temperature: {
    ...basic.fontWeightBold,
    color: colors.white,
    fontSize: 82
  },
  weather_info__location: {
    ...basic.weather_info__location,
    ...basic.fontWeightMedium,
    color: colors.white
  },
  weather_info__description: {
    ...basic.fontWeightLight,
    color: '#a6a6a6',
    top: 10,
    fontSize: 16
  },
  backgroundImage: {

  },
  changeModeBtn: {
    ...basic.darkThemeBtn,
    backgroundColor: colors.white
  },
  weather_info__location_pin: {
    ...basic.weather_info__location_pin,
    color: colors.white
  },
  info_box: {
    ...basic.info_box,
    borderWidth: 1,
    borderColor: '#232323'
  },
  info_box_p: {
    ...basic.info_box_p,
    opacity: 0.60,
    color: '#a6a6a6'
  },
  info_box_percentage: {
    fontSize: 17.75,
    color: colors.white
  },
  info_box_h5: {
    ...basic.info_box_h5,
    color: colors.white
  },
  info_days_box: {
    ...basic.info_days_box,
    backgroundColor: '#d6d6d6'
  },
  info_days_title: {
    alignSelf: "center",
    fontSize: 14,
    color: '#1e1e1e'
  },
  pollution_icon: {
    width: 105,
    height: 105
  },
  info_days_icon: {
    marginTop: 5,
    marginBottom: 5,
    alignSelf: "center"
  },
  info_days_temperature: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "700",
    color: '#1e1e1e'
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
  loc_remove_icon: {
    backgroundColor: 'transparent'
  }
})
