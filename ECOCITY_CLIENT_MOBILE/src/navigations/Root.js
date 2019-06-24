import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthStack from './AuthStackNavigator';
import DrawerNavigator from './DrawerNavigator';


const RootNavigator = createSwitchNavigator({
    Auth: { screen: AuthStack },
    Main: { screen: DrawerNavigator }
})

export default createAppContainer(RootNavigator); 