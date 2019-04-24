import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import AsyncStorage from '@react-native-community/async-storage';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as FavoriteActions from '../actions/FavoriteActions'

class LocationModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      text: "",
      locations: []
    }
  }

  async componentDidMount () {
    this.navigationEventListener = Navigation.events().bindComponent(this)
    this.setState({ isLoading: false })
  }

  componentWillUnmount () {
    // Not mandatory
    if (this.navigationEventListener) {
      this.navigationEventListener.remove()
    }
  }


  storeData = async (data) => {
    try {
      await AsyncStorage.setItem('@location',  JSON.stringify(data))
      this.getData()
    } catch (e) {
      // saving error
    }
  }
  getData = async () => {
    var value = null;
    try {
      value = await AsyncStorage.getItem('@location')
      if(value !== null) {
        console.log(value, 'value')
        console.log(this.props, 'props')
      }
    } catch(e) {
      // error reading value
    }
    return value;
  }

  render () {
    return <View style={styles.container}>
        <View style={styles.main}>

          <GooglePlacesAutocomplete
            placeholder='Szukaj miejsca'
            minLength={2}
            autoFocus={false}
            returnKeyType={'search'}
            keyboardAppearance={'light'}
            listViewDisplayed='auto'
            fetchDetails={true}
            renderDescription={row => row.description}
            onPress={(data, details = null) => {
              console.log(data)
              let [city, country] = data.description.split(",");
              console.log(city, country)

              this.setState(prevState => ({
                locations: [...prevState.locations, { city: city, country: country }]
              }))

              this.storeData(this.state.locations);
              this.props.addFavoriteLocations(this.state.locations)

              console.log(this.props, '[locs')
            }}

            getDefaultValue={() => ''}

            query={{
              key: 'AIzaSyBCfTEFk1fdP6PL_lT5V9iWkMaoXiMViDA',
              language: 'en',
              types: '(cities)'
            }}

            styles={{
              textInputContainer: {
                borderTopWidth: 0,
                borderBottomWidth: 0,
                width: '100%'
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 45,
                width: '100%',
                fontSize: 18
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
              listView: {
                color: 'black',
                backgroundColor: 'white'
              }
            }}

            currentLocation={true}
            currentLocationLabel="Obecna lokalizacja"
            nearbyPlacesAPI='GooglePlacesSearch'
            GoogleReverseGeocodingQuery={{
            }}
            GooglePlacesSearchQuery={{
              rankby: 'distance',
              type: 'cafe'
            }}
            GooglePlacesDetailsQuery={{
              fields: 'formatted_address'
            }}
            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
            debounce={200}
          />
          <Text> {this.getData().city}</Text>
        </View>
    </View>
  }
}

const styles = StyleSheet.create({
  add_location_header: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  container: {
    flex: 1
  },
  locationButton: {
    height: 50,
    width: 200,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'gold',
    margin: 10,
    overflow: 'hidden',
    padding: 14,
    borderRadius: 20,
    textAlign: 'center'
  },
  main: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'white'
  },
  location_input: {
    height: 45,
    width: 300,
    paddingLeft: 5,
    fontWeight: "bold",
    fontSize: 35,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 2
  }
})


const mapStateToProps = (state) => {
  return {
    locations: state
  }
}

const mapDispatchToProps = (dispatch) => {
  const { addFavoriteLocations} = FavoriteActions
  return {
    ...bindActionCreators({ addFavoriteLocations }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationModal)
