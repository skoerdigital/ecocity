import { createStackNavigator} from 'react-navigation';

import HomeContainer from '../containers/Home'
import RecentRidesStackNavigator from './RecentRidesStackNavigator';
import WalletStackNavigator from './WalletStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';
import ScanStackNavigator from './ScanStackNavigator';
import NotificationsStackNavigator from './NotificationsStackNavigator';
import ReportIssueStackNavigator from './ReportIssueStackNavigator';

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
    },
    Notifications: {
        screen: NotificationsStackNavigator,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    ReportIssue: {
        screen: ReportIssueStackNavigator,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
},{
    mode: "modal",
    initialRouteName: "Home",
})
