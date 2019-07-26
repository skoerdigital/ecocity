import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import images from '../../globals/images';
import { observer, inject } from 'mobx-react';
import { Callout } from 'react-native-maps';
import colors from '../../globals/colors';
import TextSmallInfo from '../UI/TextSmallInfo';
import TextSmall from '../UI/TextSmall';

@inject('scooterStore', 'modalStore', 'mapStore')
@observer
export default class EcoMarker extends Component{
    
    render(){
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                
                <Animatable.Image source={images.MAP_MARKER} style={{width: 40, height: 40, resizeMode: 'contain'}} animation="zoomIn" delay={1500} duration={1500} iterationCount={1} />
                    
                    <Animatable.View animation={this.props.mapStore.markerActive && this.props.id === this.props.mapStore.selectedScooter.id ? 'zoomInDown' : 'zoomOutUp'} style={styles.directionTips}>
                        <TextSmallInfo>{Math.round(this.props.distanceToScooter,2)} km</TextSmallInfo>
                        <TextSmallInfo>{Math.round(this.props.timeToScooter)} min</TextSmallInfo>
                    </Animatable.View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    directionTips: {
        position: 'absolute',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 3,
        bottom: 50,
    }

})