import React from 'react';
import { TouchableWithoutFeedback, Image } from 'react-native';
import { createStackNavigator, NavigationActions } from 'react-navigation';

import images from '../globals/images';
import ScanContainer from '../containers/Scan';

const customHeaderLeft = navigation => <TouchableWithoutFeedback
                                            onPress={()=>{ navigation.dispatch(NavigationActions.back()) }}>
                                            <Image 
                                                style={{ width: 20, height: 20, marginHorizontal: 20 }}
                                                source={images.BUTTON_CLOSE}/>
                                            </TouchableWithoutFeedback>

export default ScanStack = createStackNavigator({
    Scan: {
        screen: ScanContainer,
        navigationOptions: ({navigation}, title) => ({
            headerLeft: (customHeaderLeft(navigation)),
            headerTransparent: true, 
            headerStyle: { borderBottomWidth: 0 },
        })
    },
    
},
{
    headerMode: 'screen',    
})
