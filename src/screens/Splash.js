import React from 'react';
import {
  Animated,
  Dimensions,
  View,
  Text
} from "react-native";
import { goToMainScreen } from '../../navigation'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeActions from '../actions/HomeActions';
var TimerMixin = require('react-timer-mixin');

const {
  width,
  height
} = Dimensions.get('window');

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.animatedIcon = new Animated.ValueXY();
    this.animatedBar = new Animated.Value(0);

    this.state = {
      status: ""
    };
  }
  

  performTask = async() => {

    let { weather, getWeatherData } = this.props;
    console.log(weather, 'home', this.props)
    this.setState({status: "Sprawdzam pogodę..."})
    return new Promise((resolve, reject) => {
      this.timer = TimerMixin.setTimeout(() => {
        getWeatherData().then(() => {
          if (weather) {
            reject('Błąd pobierania danych...')
          } else {
            resolve('Gotowe!');
          }
        });
      }, 1300)
    })
  }

  async componentDidMount() {
    
    Animated.timing(this.animatedBar, {
      toValue: 1,
      delay: 0,
      duration: 2000,
     useNativeDriver: true,
    }).start();
    
    this.performTask().then((status) => {
      this.setState({status: status})
      Animated.spring(this.animatedIcon, {
        toValue: {x: 0, y: -20},
        friction: 1,
        delay: 500,
       useNativeDriver: true,
      }).start(() => goToMainScreen());
    
    }).catch((err) => {
      Animated.timing(this.animatedBar).stop();    
      this.setState({status: err})
    });
  }

  componentWillUnmount() {
    TimerMixin.clearTimeout(this.timer);
  }

  render() {

    const transformStyle = {
      transform: this.animatedIcon.getTranslateTransform()
    };
    
    const scaleText = {
      transform: [{ scale: this.animatedBar }]
    };

    return (
      <View style={styles.viewStyles}>
        <Animated.View style={[styles.ring, transformStyle]}>
          <Animated.Image
            source={require("../assets/img/bg/partly-cloudy-day.png")}
            style={[
              {
                resizeMode: "contain",
                width: 195,
                height: 195
              }
            ]}
          />
        </Animated.View>
          <Text style={styles.textStyles}>Weather App</Text>
        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: 250,
              marginTop: 20,
              width: width/2,
              height: 2,
              backgroundColor: "#fff",
              borderRadius: 2
            },
            scaleText
          ]}
        />
        <Text style={styles.status}>{this.state.status}</Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  textStyles: {
    color: 'white',
    fontSize: 28,
    fontFamily: "EncodeSansExpanded-Medium",
  },
  status: {
    top: 60,
    color: 'white',
    fontFamily: "EncodeSansExpanded-Light",
    fontSize: 14,
  }
}

const mapStateToProps = (state) => {
  return {
      weather: state.home.weather,
  }
}

const mapDispatchToProps = (dispatch) => {
  const { getWeatherData } = HomeActions;
  return {
      ...bindActionCreators({ getWeatherData }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);