import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class RecentRides extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    RecentRides
                </Text>
                <Text style={styles.button} onPress={() => this.props.navigation.navigate('RideDetails')}>RecentRidesDetail</Text>
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