import React, { Component } from 'react';
import { Image, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import images from '../../globals/images';


export default class EcoMarker extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Animatable.Image source={images.MAP_MARKER} style={{width: 40, height: 40, resizeMode: 'contain'}} animation="zoomIn" iterationCount={1} />
            </View>
        )
    }
}

