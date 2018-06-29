import React from 'react';
import {
  AsyncStorage,
  View,
  TouchableHighlight,
  Text
} from 'react-native';
import styles from '../../style'

export default class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
    };
  
    render() {
      return (
        <View style={styles.container}>
            <TouchableHighlight
                 style={styles.button}
                 underlayColor={'#EEEEEE'}
                 onPress={this._signInAsync}>
                    <Text> Sign in!! </Text>
            </TouchableHighlight>
        </View>
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };
  }