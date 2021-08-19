import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StarMapScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Star Map Screen!</Text>
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
