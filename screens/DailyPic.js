import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DailyPicScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Daily Pic Screen!</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
