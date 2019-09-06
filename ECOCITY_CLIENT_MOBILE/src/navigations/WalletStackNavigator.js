import React from 'react';
import { createStackNavigator, NavigationActions } from 'react-navigation';

import TextH1 from '../components/UI/TextH2';
import BackButton from '../components/UI/BackButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../globals/colors';
import Wallet from '../containers/Wallet';

const customHeaderLeft = navigation => <TouchableWithoutFeedback onPress={()=>{ navigation.dispatch(NavigationActions.back()) }}><BackButton/></TouchableWithoutFeedback>

export default WalletStack = createStackNavigator({
    Wallet: {
        screen: Wallet,
        navigationOptions: ({navigation}, title) => ({
            headerLeft: (customHeaderLeft(navigation)),
            headerTitle: (<TextH1 style={{ color: colors.GREYDARK, fontSize: 17 }}>Wallet</TextH1>) 
        })
    }
},
{
    headerMode: 'screen',    
})
