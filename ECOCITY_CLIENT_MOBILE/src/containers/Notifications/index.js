import React, { Component } from 'react';
import {View, FlatList} from 'react-native';
import {observer, inject} from 'mobx-react'

import styles from './styles';
import Notification from '../../components/Notification/Notification';

@inject('notificationStore')
@observer
export default class NotificationsScreen extends Component {

    componentDidMount(){
        const { getNotificationsAsync } = this.props.notificationStore;
        getNotificationsAsync();
    }

    render(){
        return(
            <View style={styles.container}>

            <FlatList
                style={{flex: 1}}
                data={this.props.notificationStore.notificationData.slice()}
                showsVerticalScrollIndicator={false}
                enableEmptySections
                keyExtractor={item => item.id}
                renderItem={({item, index}) =>
                <Notification
                    index={index}
                    title={item.title}
                    message={item.message}
                    timestamp={item.timestamp}
                />
                }
                />
            </View>
        )
    }
}