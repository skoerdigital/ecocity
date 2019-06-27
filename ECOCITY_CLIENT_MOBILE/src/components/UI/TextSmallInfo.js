import React from 'react';
import { Text } from 'react-native'

const textSmallInfo = (props) => (
    <Text {...props} style={[{fontFamily: 'Montserrat-Medium', fontSize: 12}, props.style]}>{props.children}</Text>
)

export default textSmallInfo;