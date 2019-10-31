import React,  { Component } from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import StandardButton from '../../components/UI/Button';
import {inject, observer} from "mobx-react";

import BraintreeDropIn from 'react-native-braintree-payments-drop-in';


const ButtonInner = ({amount, bonus}) =>
    <View>
        <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', fontSize: 18, textAlign: 'center'}}>€{amount}</Text>
        <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', textAlign: 'center'}}>+ €{bonus} BONUS</Text>
    </View>


@inject(['paymentStore'])
@observer
export default class WalletContainer extends Component {

    onPaymentHandler(){
        console.log('Braintree');

        BraintreeDropIn.show({
            clientToken: 'sandbox_pgykqgz7_k96tjbvrd7x643pd',
            merchantIdentifier: 'merchant.ecocity',
            googleMerchantId: 'googlePayMerchantId',
            countryCode: 'PL',
            currencyCode: 'EUR',
            merchantName: 'EcoCity',
            orderTotal: '100',
            googlePay: true,
            applePay: true,
            vaultManager: true,
        })
            .then(result => console.log(result))
            .catch((error) => {
                console.log(error);
                if (error.code === 'USER_CANCELLATION') {
                    // update your UI to handle cancellation
                } else {
                    // update your UI to handle other errors
                }
            });
    }

    render(){
        return (
            <Animatable.View 
                animation="slideInDown"
                easing={'ease-in-out'}
                useNativeDriver={true}
                duration={600}
                style={styles.container}>
                <View style={styles.balanceContainer}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.header}>Current balance</Text>
                        <Text style={styles.amount}>€ 13.76 </Text>
                    </View>
                    <View style={{ flex: 1, width: '100%', alignItems: 'stretch', justifyContent: 'center' }}>  
                        <StandardButton
                            handleParentMethod={() => this.onPaymentHandler()}
                            style={styles.buttons}>
                            <ButtonInner amount={'10'} bonus={0}/>
                        </StandardButton>

                        <StandardButton
                            handleParentMethod={() => this.onPaymentHandler()}
                            style={styles.buttons}>
                            <ButtonInner amount={20} bonus={2}/>
                        </StandardButton>

                        <StandardButton
                            handleParentMethod={() => this.onPaymentHandler()}
                            style={styles.buttons}>
                            <ButtonInner amount={30} bonus={5}/>
                        </StandardButton>

                        <StandardButton
                            handleParentMethod={() => this.onPaymentHandler()}
                            style={styles.buttons}>
                            <ButtonInner amount={40} bonus={10}/>
                        </StandardButton>

                        <StandardButton
                            handleParentMethod={() => this.onPaymentHandler()}
                            style={styles.buttons}>
                            <ButtonInner amount={50} bonus={15}/>
                        </StandardButton>

                    </View>
                    
                </View>
            </Animatable.View>
        )
    }
}
