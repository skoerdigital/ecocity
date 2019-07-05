import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import images from '../../globals/images';
import { observer, inject } from 'mobx-react';
import { Callout } from 'react-native-maps';


export default inject('mapStore')(observer(ecoCallout = (props) => (
    <Callout>
        <Text>{props.navigateDistanceDuration +'ddds'}</Text>
    </Callout>
)))