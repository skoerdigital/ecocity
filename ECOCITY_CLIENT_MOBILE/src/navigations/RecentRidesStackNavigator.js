import React from 'react';
import { createStackNavigator, HeaderBackButton, NavigationActions } from 'react-navigation';

import RecentRides from '../containers/RecentRides';
import RecentRidesDetails from '../screens/RecentRidesDetailsScreen';

import TextH1 from '../components/UI/TextH2';
import BackButton from '../components/UI/BackButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../globals/colors';

const customHeaderLeft = navigation => <TouchableWithoutFeedback onPress={()=>{ navigation.dispatch(NavigationActions.back()) }}><BackButton/></TouchableWithoutFeedback>

export default RecentRidesStack = createStackNavigator({
    Rides: {
        screen: RecentRides,
        navigationOptions: ({navigation}, title) => ({
            headerLeft: (customHeaderLeft(navigation)),
            headerTitle: (<TextH1 style={{ color: colors.GREYDARK, fontSize: 17 }}>Recent Rides</TextH1>) 
        })
    },
    RideDetails: {
        screen: RecentRidesDetails  ,
        navigationOptions: ({navigation}, title) => ({
            headerLeft: (customHeaderLeft(navigation)),
        })
    }
},
{
    headerMode: 'screen',    
})
