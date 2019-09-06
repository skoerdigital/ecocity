import React, { Component } from 'react';
import {Text, View, FlatList} from 'react-native';
import {observer, inject} from 'mobx-react'

import RecentRide from '../../components/Ride/SingleRide';
import styles from './styles';

@inject('rentalStore')
@observer
export default class RecentRides extends Component {

    componentDidMount(){
        const { getRentalsAsync } = this.props.rentalStore;
        getRentalsAsync();
    }

    render(){
        return(
            <View style={styles.container}>

            <FlatList
                style={{flex: 1}}
                data={this.props.rentalStore.rentalData.slice()}
                showsVerticalScrollIndicator={false}
                enableEmptySections
                keyExtractor={item => item.id}
                renderItem={({item, index}) =>
                <RecentRide
                    index={index}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    startPoint={item.startPoint}
                    endPoint={item.endPoint}
                    amount={item.amount}
                    duration={item.duration}
                    distance={item.distance}
                />
                }
                />
            </View>
        )
    }
}