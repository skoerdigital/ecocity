import React from 'react';
import { Text } from 'react-native'

const textSmall = (props) => (
    <Text {...props} style={[{fontFamily: 'Montserrat-Medium', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase'}, props.style]}>{props.children}</Text>
)



export default textSmall;