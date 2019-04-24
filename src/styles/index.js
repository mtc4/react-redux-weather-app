import { lightStyleSheet, darkStyleSheet } from './themes/'

export function getStyleSheet (useDarkTheme) {
  return useDarkTheme ? darkStyleSheet : lightStyleSheet
}
export const shadowOpt = {
  width: 125,
  height: 105,
  color: '#000',
  radius: 18,
  opacity: 0.023,
  x: 0,
  y: 0,
  style: {
    marginVertical: 10,
    marginLeft: 15,
    zIndex: 0,
    paddingBottom: 10,
    marginRight: 15
  }
}