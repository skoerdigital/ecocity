import React from 'react';
import { createStackNavigator, NavigationActions } from 'react-navigation';

import TextH1 from '../components/UI/TextH2';
import BackButton from '../components/UI/BackButton';
import { Image } from 'react-native';
import colors from '../globals/colors';
import images from '../globals/images';
import ReportIssueScreen from '../containers/ReportIssue';
import ScanHelperScreen from '../containers/ScanHelper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const customHeaderLeft = navigation => <TouchableWithoutFeedback onPress={()=>{ navigation.dispatch(NavigationActions.back()) }}><BackButton/></TouchableWithoutFeedback>


const customHeaderLeftScan = navigation => <TouchableWithoutFeedback
                                            onPress={()=>{ navigation.dispatch(NavigationActions.back()) }}>
                                            <Image 
                                                style={{ width: 20, height: 20, marginHorizontal: 20 }}
                                                source={images.BUTTON_CLOSE}/>
                                            </TouchableWithoutFeedback>

export default ReportIssueStackNavigator= createStackNavigator({
    ReportIssue: {
        screen: ReportIssueScreen,
        navigationOptions: ({navigation}, title) => ({
            headerLeft: (customHeaderLeft(navigation)),
            headerTitle: (<TextH1 style={{ color: colors.GREYDARK, fontSize: 17 }}>Report Issue</TextH1>) 
        })
    },
    ScanHelper: {
        screen: ScanHelperScreen,
        navigationOptions: ({navigation}, title) => ({
            headerLeft: (customHeaderLeftScan(navigation)),
            headerTransparent: true, 
            headerStyle: { borderBottomWidth: 0 },
        })
    }
},
{
    headerMode: 'screen',
    initialRouteName: 'ReportIssue'   
})
