import React from 'react';
import { Image } from 'react-native'
import images from '../../globals/images';

const backButton = (props) => (
    <Image
        style={{ width: 25, height: 25, marginHorizontal: 10, resizeMode: "contain" }} 
        source={images.BACK_BUTTON}
        />
)

export default backButton;