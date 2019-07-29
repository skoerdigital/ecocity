import React, { Component } from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {observer, inject} from 'mobx-react'

import RecentRide from '../../components/Ride/SingleRide';
import styles from './styles';


@inject('rentalStore')
@observer
export default class RecentRides extends Component {

    componentDidMount(){
        this.props.rentalStore.getRentalsAsync();
        console.log(this.props.rentalStore)
    }

    render(){
        return(
            <View style={styles.container}>

                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1, flex: 1 }}
                    bounces={false}
                    vertical={false}>
                    <RecentRide/>
                    <RecentRide/>
                    <RecentRide/>
                    <RecentRide/>
                    <RecentRide/>
                    <RecentRide/>
                    <RecentRide/>
                </ScrollView>
            </View>
        )
    }
}