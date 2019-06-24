import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginContainer from '../containers/Login';
import RegisterContainer from '../containers/Register';


export default AuthStack = createStackNavigator(
    {
        Login: {
            screen: LoginContainer
        },
        Register: {
            screen: RegisterContainer
        }
    },
    {
        headerMode: 'none'
    }
)