import { StyleSheet } from 'react-native'

const basic = StyleSheet.create({
  baseContainerStyles: {
    flex: 1
  },
  baseBoxStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 150,
    width: 150
  },
  weather_info: {
    marginTop: 86.666,
    marginLeft: 53.333,
    marginRight: 53.333,
    marginBottom: 26.666,
    borderBottomWidth: 1,
    paddingBottom: 26
  },
  weather_info__location: {
    fontSize: 24,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  fontWeightMedium: {
    fontFamily: 'EncodeSansExpanded-Light'
  },
  fontWeightBold: {
    fontFamily: 'EncodeSansExpanded-Medium'
  },
  fontWeightLight: {
    fontFamily: 'EncodeSansExpanded-ExtraLight'
  },
  darkThemeBtn: {
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: 100,
    justifyContent: 'center'
  },
  weather_info__location_pin: {
    ...this.fontWeightMedium,
    fontSize: 20
  },
  info_box: {
    zIndex: 1,
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    borderRadius: 7,
    overflow: "hidden"
  },
  info_box_p: {
    fontSize: 12.32,
    fontWeight: "700",
    marginTop: 5,
    marginBottom: 0,
    marginLeft: 18,
    opacity: 0.35
  },
  info_box_h5: {
    fontSize: 21.95,
    fontWeight: "bold",
    marginTop: 14,
    marginLeft: 18
  },
  info_days_box: {
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 90
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
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center"
  },
  info_days_temperature: {
    alignSelf: "center",
    fontSize: 20
  },
  uv_index_box: {
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    width: 95,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  uv_index_text: {
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
    fontWeight: "700",
    marginTop: 10
  }
})
export default basic
export const colors = {
  white: '#fff',
  black: '#000',
  green: '#8fc54e',
  yellow: '#f8b24d',
  orange: '#f69433',
  red: '#df4230'
}
