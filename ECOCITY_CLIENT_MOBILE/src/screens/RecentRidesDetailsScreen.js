import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextH2 from '../components/UI/TextH1';

export default class RecentRidesDetails extends Component {

    static navigationOptions = ({navigation}, title) => ({
        headerTitle: (<TextH2 style={{ fontSize: 14 }}>Recent Rides 1111</TextH2>) 
    })


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