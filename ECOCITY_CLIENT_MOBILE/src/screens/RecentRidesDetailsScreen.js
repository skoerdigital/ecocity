import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class RecentRidesDetails extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    RecentRidesDetails
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});