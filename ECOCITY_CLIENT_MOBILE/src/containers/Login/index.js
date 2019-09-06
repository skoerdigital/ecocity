import React, { Component } from 'react';
import { View, Button } from 'react-native';
import TextH1 from '../../components/UI/TextH1';

import styles from './styles';

export default class LoginContainer extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TextH1 style={styles.header}>
                    Sing Up 1
                </TextH1>
                <Button
                    onPress={()=> (this.props.navigation.navigate('Register'))}
                    title="Register"
                    color="#841584"
                    accessibilityLabel="Register button"
                />
                <Button
                    onPress={()=> (this.props.navigation.navigate('Main'))}
                    title="Login"
                    color="#841584"
                    accessibilityLabel="Login"
                />
            </View>
        )
    }
}