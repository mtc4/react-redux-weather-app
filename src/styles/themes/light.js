import {StyleSheet} from 'react-native';
const Colors = {
    dark: 'black',
    light: 'white'
};
const baseContainerStyles = {
   flex: 1,
};

const baseBoxStyles = {
   justifyContent: 'center',
   alignItems: 'center',
   borderWidth: 2,
   height: 150,
   width: 150
};
  
export const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.light
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.dark
    },
    welcome: {
       fontSize: 35,
       fontWeight: 'bold',
    },
    weather_info: {
       marginTop: 86.666,
       marginLeft: 53.333,
       marginRight: 53.333,
       marginBottom: 26.666,
       borderBottomWidth: 1,
       paddingBottom: 26,
       borderColor: "#f2f2f2"
    },
    weather_info__temperature: {
       color: "#222222",
       fontSize: 82,
       fontFamily: "System"
    },
    weather_info__location: {
       color: "#222222",
       fontSize: 24,
       flexDirection: "row",
       flexWrap: "wrap",
       fontWeight: "bold",
       fontFamily: "System"
    },
    weather_info__description: {
       color: "#bcbcbc",
       top: 10,
       fontSize: 16,
       fontFamily: "System"
    }
});