import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../AssetsFolder/stars.gif')}
          style={styles.backgroudImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Stellar App</Text>
          </View>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate("SpaceCrafts")
          }} style={styles.routeCards}>
            <Text style={styles.routeText}>
              Space Crafts</Text>
              <Text style={styles.knowMore}>Know More --></Text>
              <Text style={styles.bgDigit}>1</Text>
              <Image style={styles.iconImage} source={require('../AssetsFolder/spacecraft.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routeCards} onPress={() => {
            this.props.navigation.navigate("DailyPic")
          }}>
            <Text style={styles.routeText}>Daily Pics</Text>
            <Text style={styles.knowMore}>Know More --></Text>
            <Text style={styles.bgDigit}>2</Text>
            <Image style={styles.iconImage} source={require('../AssetsFolder/photo.png')}/>
          </TouchableOpacity>
            <TouchableOpacity style={styles.routeCards} onPress={() => {
            this.props.navigation.navigate("StarMap")
          }}>
            <Text style={styles.routeText}>Star Map</Text>
            <Text style={styles.knowMore}>Know More --></Text>
            <Text style={styles.bgDigit}>3</Text>
            <Image style={styles.iconImage} source={require('../AssetsFolder/star_map.png')}/>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeCards: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    paddingLeft: 30,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  backgroudImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15
  },
  bgDigit: {
    position: "absolute",
    color: "rgba(183, 183, 183, 0.5)",
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1
  },
  iconImage: {
    position: 'absolute',
    height: 100,
    width: 100,
    resizeMode: "contain",
    right: 70,
    top: -50,

  }
});
