import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import styles from '../../style'
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Tab1 extends React.Component {


    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            headerRight:
                <View>
                    <Icon style={{padding: 10}}
                          name='power-settings-new'
                          size={30}
                          color={'black'}
                          onPress={params.onLogoutTapped}
                    />
                </View>
        };
    };

    _onLogoutTapped = async () => {
        await AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('Auth');
    };

    componentWillMount() {
        this.props.navigation.setParams({
            onLogoutTapped: this._onLogoutTapped,
        });
    }


    render() {
        return(
            <View style={styles.container}>
            <Text>
                Tab 1
            </Text>
            <TouchableHighlight
                 style={styles.button}
                 underlayColor={'#EEEEEE'}
                 onPress={() => this.props.navigation.navigate("SubTab1")}>
                    <Text> Click me!! </Text>
                </TouchableHighlight>
            </View>
        );
    }
}