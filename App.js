/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MainStack from './src/router'



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <MainStack/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
