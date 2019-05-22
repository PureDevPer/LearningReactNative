import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY = "85616b14bfc84b9641e418e55ab915b3";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
    cityName: null,
    tempMax: null,
    tempMin: null,
    weatherDescription: null
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition( 
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },

      error => {
        this.setState({
          error: error
        })
      }
      
    );
  }

  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      console.log(json.name);
      console.log(json.main.temp_max, json.main.temp_min, json.weather[0].description)
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        cityName: json.name,
        isLoaded: true,
        tempMax: json.main.temp_max, 
        tempMin: json.main.temp_min, 
        weatherDescription: json.weather[0].description
      });
    });
  }

  render() {
    const { isLoaded, error, temperature, name, cityName, tempMax, tempMin, weatherDescription } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          //<Weather weatherName={"Mist"} temp ={Math.round(temperature)} />
          <Weather 
            weatherName={name} 
            temp ={Math.round(temperature)} 
            cityName={cityName} 
            tempMax={Math.round(tempMax)} 
            tempMin={Math.round(tempMin)} 
            weatherDescription = {weatherDescription}  
          />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText:{
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading:{
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText:{
    fontSize: 38,
    marginBottom: 100
  }
});