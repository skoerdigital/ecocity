import React from 'react';
import { createStackNavigator, HeaderBackButton, NavigationActions } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';

import WalletScreen from '../screens/WalletScreen';
import HomeContainer from '../containers/Home'
import SettingsScreen from '../screens/SettingsScreen';
import RecentRidesStackNavigator from './RecentRidesStackNavigator';


export default HomeStack = createStackNavigator({
    Home: {
        screen: HomeContainer,
    },
    Rides: {
        screen: RecentRidesStackNavigator,
        navigationOptions: ({navigation}, title) => ({
            headerLeft: (<HeaderBackButton onPress={()=>{ navigation.dispatch(NavigationActions.back()) }}/>),
            title: "CHuj"
        })
    }
},{
    mode: "modal",
    initialRouteName: "Home",
})
