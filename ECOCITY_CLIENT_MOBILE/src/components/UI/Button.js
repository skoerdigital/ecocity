import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../../globals/colors';
import Ripple from 'react-native-material-ripple';

export default class StandardButton extends Component {
    render(){
        return(
                <Ripple 
                    rippleOpacity={0.2}
                    rippleColor={colors.GREEN3}
                    onPress={()=>{
                        if(typeof this.props.handleParentMethod !== 'undefined'){
                            this.props.handleParentMethod();
                        }
                    }}
                    style={[{ flex: 1, padding: this.props.style.flex === 0 ? 15 : 0, backgroundColor: colors.GREEN1, overflow: 'hidden', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }, this.props.style]}>
                    {typeof this.props.children === 'string' ?
                        <Text {...this.props} style={[{
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 14,
                            textAlign: 'center',
                            color: 'white'
                        }, this.props.style]}>{this.props.children}</Text> :
                        <View>{this.props.children}</View>
                    }
                </Ripple>
           
        )
    }
}

