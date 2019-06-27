import React from 'react';
import { Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../../globals/colors';

const standardButton = (props) => (
    <View style={[{ backgroundColor: colors.GREEN1, flex: 1, paddingVertical: 8, justifyContent: 'center', alignItems: 'center', borderRadius: 7}, props.style]}>
        <TouchableWithoutFeedback>
            <Text {...props} style={[{fontFamily: 'Montserrat-Bold', fontSize: 14, color: 'white'}, props.style]}>{props.children}</Text>
        </TouchableWithoutFeedback>
    </View>
    
    
)



export default standardButton;