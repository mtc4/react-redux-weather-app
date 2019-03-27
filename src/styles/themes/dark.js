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
  
export const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.dark
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.light
    },
    welcome: {
       fontSize: 35,
       fontWeight: 'bold',
       color: 'white'
    },
    weather_info: {
       marginTop: 86.666,
       marginLeft: 53.333,
       marginRight: 53.333,
       marginBottom: 26.666,
       borderBottomWidth: 1,
       paddingBottom: 26,
       borderColor: "#383838"
    },
    weather_info__temperature: {
       color: "#ffffff",
       fontSize: 82,
       fontFamily: "System"
    },
    weather_info__location: {
       color: "#ffffff",
       fontSize: 24,
       flexDirection: "row",
       flexWrap: "wrap",
       fontWeight: "bold",
       fontFamily: "System"
    },
    weather_info__description: {
       color: "#a6a6a6",
       top: 10,
       fontSize: 16,
       fontFamily: "System"
    }
});