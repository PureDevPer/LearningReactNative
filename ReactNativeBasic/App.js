import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //flexDirection: 'row'
    //justifyContent: 'center',
    justifyContent: 'space-around',
    //alignItems: 'center'
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  redView:{
    // flex: 1,
    // Flex is ratio
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  yellowView:{
    height: 50,
    width: 50,
    backgroundColor: 'yellow'
  }
});
