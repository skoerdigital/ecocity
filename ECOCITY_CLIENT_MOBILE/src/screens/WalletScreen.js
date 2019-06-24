import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class WalletScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    WalletScreen
                </Text>
                <Text onPress={() => this.props.navigation.navigate('Settings')}>
                    WalletDetails
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