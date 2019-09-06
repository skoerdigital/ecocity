import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../../globals/colors';
import images from '../../globals/images';
import TextH2 from '../UI/TextH2';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default class DrawerMenu extends Component {
    render(){
        return(
            <View style={[styles.menu, this.props.style]}>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Rides')}>
                    <Text style={styles.item}>RECENT RIDES</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Wallet')}>
                    <Text style={styles.item}>WALLET</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Settings')}>
                    <Text style={styles.item}>SETTINGS</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Text style={styles.item}>HELP</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Text style={styles.item}>ABOUT</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    menu: {
        flexDirection: 'column',
        paddingVertical: 40,
    },
    item: {
        marginVertical: 15,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        letterSpacing: 2,
        color: 'white'
    }
});