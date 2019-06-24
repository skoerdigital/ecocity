import React from 'react';
import { Text } from 'react-native'

const textH1 = (props) => (
    <Text {...props} style={[{fontFamily: 'Montserrat-Bold', fontSize: 20}, props.style]}>{props.children}</Text>
)



export default textH1;