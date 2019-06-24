import React from 'react';
import { createStackNavigator } from 'react-navigation';

import RecentRides from '../screens/RecentRidesScreen';
import RecentRidesDetails from '../screens/RecentRidesDetailsScreen';


export default RecentRidesStack = createStackNavigator({
    Rides: RecentRides,
    RideDetails: RecentRidesDetails  
}, {
    headerMode: 'none'
})
