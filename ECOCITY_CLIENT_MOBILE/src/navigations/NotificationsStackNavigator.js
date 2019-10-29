import React from 'react';
import { createStackNavigator, NavigationActions } from 'react-navigation';

import NotificationsScreen from '../containers/Notifications'

import TextH1 from '../components/UI/TextH2';
import BackButton from '../components/UI/BackButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../globals/colors';

const customHeaderLeft = navigation => <TouchableWithoutFeedback onPress={()=>{ navigation.dispatch(NavigationActions.back()) }}><BackButton/></TouchableWithoutFeedback>

export default NotificationsStack = createStackNavigator({
    Notifications: {
        screen: NotificationsScreen,
        navigationOptions: ({navigation}, title) => ({
            headerLeft: (customHeaderLeft(navigation)),
            headerTitle: (<TextH1 style={{ color: colors.GREYDARK, fontSize: 17 }}>Notifications</TextH1>)
        })
    }
},
{
    headerMode: 'screen',    
})
