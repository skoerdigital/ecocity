import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import Drawer from '../containers/Drawer';
import HomeStack from './HomeStackNavigator';

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent: Drawer,
    initialRouteName: 'StackDraw'
}

export default DrawerNavigator = createDrawerNavigator({
    StackDraw: {
        screen: HomeStack
    }
},    
    DrawerConfig
);