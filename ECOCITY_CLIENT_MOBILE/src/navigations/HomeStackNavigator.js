import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, HeaderBackButton, NavigationActions } from 'react-navigation';

import HomeContainer from '../containers/Home'
import RecentRidesStackNavigator from './RecentRidesStackNavigator';
import WalletStackNavigator from './WalletStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';
import ScanStackNavigator from './ScanStackNavigator';

export default HomeStack = createStackNavigator({
    Home: {
        screen: HomeContainer,
    },
    Rides: {
        screen: RecentRidesStackNavigator,
        navigationOptions: ({navigation}) => ({
            header: null 
        })
    },
    Wallet: {
        screen: WalletStackNavigator,
        navigationOptions: ({navigation}) => ({
            header: null 
        })
    },
    Settings: {
        screen: SettingsStackNavigator,
        navigationOptions: ({navigation}) => ({
            header: null 
        })
    },
    Scan: {
        screen: ScanStackNavigator,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
},{
    mode: "modal",
    initialRouteName: "Home",
})
