import React from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from '../../style'

export default class SubTab1 extends React.Component {

    render() {
        return(
            <View style={styles.container}>
                <Text>
                    SubTab 1
                </Text>
            </View>
        );
    }
}