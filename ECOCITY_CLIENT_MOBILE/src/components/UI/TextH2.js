import React from 'react';
import { Text } from 'react-native'

const textH2 = (props) => (
    <Text {...props} style={[{fontFamily: 'Montserrat-Bold', fontSize: 14}, props.style]}>{props.children}</Text>
)

export default textH2;