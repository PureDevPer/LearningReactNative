import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from "prop-types";

/*
export default class Weather extends Component{
    render(){
        return(
            <LinearGradient 
            colors={["#00C6FB", "#005BEA"]} 
            style={styles.container}
            >
                <View style={styles.upper}>
                    <Ionicons color="white" size={144} name="ios-rainy"/>
                    <Text style={styles.temp}>35F</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Raining</Text>
                    <Text style={styles.subtitle}>For more info look outside</Text>
                </View>
            </LinearGradient>
        );
    }
}
*/

const weatherCases = {
    Rain: {
        colors: ['#5499C7', '#AED6F1'],
        title: "Rain",
        subtitle: "For more info look outside",
        icon: 'weather-pouring'
    },
    Clear: {
        colors: ['#D6EAF8', '#5DADE2'],
        title: "Sunny",
        subtitle: "For more info look outside",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: "Storm",
        subtitle: "For more info look outside",
        icon: 'weather-lightning-rainy'
    },
    Clouds:{
        colors: ['#85929E', '#D5D8DC'],
        title: "Clouds",
        subtitle: "For more info look outside",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: "Snow",
        subtitle: "For more info look outside",
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ['#AF7AC5', '#E8DAEF'],
        title: "Drizzle",
        subtitle: "For more info look outside",
        icon: 'weather-rainy'
    },
    Haze: {
        colors: ['#1F618D', '#AED6F1'],
        title: "Haze",
        subtitle: "For more info look outside",
        icon: 'weather-fog'
    },
    Mist: {
        colors: ['#707B7C', '#A6ACAF'],
        title: "Mist",
        subtitle: "For more info look outside",
        icon: 'weather-partlycloudy'
    }
}

function Weather({ weatherName, temp, cityName, tempMax, tempMin, weatherDescription}){
    console.log(weatherName, cityName, tempMax, tempMin, weatherDescription);
    return (
        <LinearGradient 
        colors={ weatherCases[weatherName].colors } 
        style={styles.container}
        >
            <View style={styles.upper}>
                <MaterialCommunityIcons 
                    color="white" 
                    size={144} 
                    name= {weatherCases[weatherName].icon} 
                />
                <View>
                    <Text style={styles.tempCurrent}> {temp} F</Text>
                    <Text style={styles.tempMaxMin}> {tempMin} F / {tempMax} F </Text>
                </View>
                <Text style={styles.city}> {cityName} </Text>
            </View>

            <View style={styles.lower}>
                <View style={styles.weatherInformation}>
                    <Text style={styles.title}> {weatherCases[weatherName].title} </Text>
                    <Text style={styles.description}> {weatherDescription} </Text>
                </View>
                <Text style={styles.subtitle}> {weatherCases[weatherName].subtitle} </Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired,

}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: "transparent"
    },
    tempCurrent:{
        fontSize: 48,
        backgroundColor: "transparent",
        color: 'white',
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: 'white',
        marginBottom: 10,
        fontWeight: "500"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: 'white',
        marginBottom: 24
    },
    city: {
        fontSize: 36,
        backgroundColor: "transparent",
        color: 'white',
        marginTop: 10
    },
    description: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 14,
        fontWeight: "400"
    },
    weatherInformation: {
        flexDirection: 'row'
    },
    tempMaxMin: {
        fontSize: 20,
        backgroundColor: "transparent",
        color: "white"
    }
});