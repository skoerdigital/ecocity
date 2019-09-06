import React,  { Component } from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import StandardButton from '../../components/UI/Button';


export default class WalletContainer extends Component {
    render(){
        return (
            <Animatable.View 
                animation="slideInDown"
                easing={'ease-in-out'}
                useNativeDriver={true}
                duration={600}
                style={styles.container}>
                <View style={styles.balanceContainer}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
                        <Text style={styles.header}>Current balance</Text>
                        <Text style={styles.amount}>13.76$</Text>
                    </View>
                    <View style={{ flex: 1, width: '100%', alignItems: 'stretch', justifyContent: 'center' }}>  
                        <StandardButton style={styles.buttons}>Top up</StandardButton>
                        <StandardButton style={styles.buttons}>Promo code</StandardButton>
                    </View>
                    
                </View>
            </Animatable.View>
        )
    }
}