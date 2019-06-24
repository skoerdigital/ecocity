import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableHighlight } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import mapStyle from '../../globals/mapStyle';
import apiKey from '../../google_api_key';
import { inject, observer } from 'mobx-react';
import images from '../../globals/images';
import EcoMarker from './EcoMarker';

const { width, height } = Dimensions.get('window');

@inject('scooterStore')
@observer
export default class HomeMap extends Component {

    componentDidMount(){
        const { getScootersAsync, scooterData } = this.props.scooterStore;
        getScootersAsync()
    }

    render(){
        const { scooterData } = this.props.scooterStore;

        return(
            <MapView
                {...this.props}
                followsUserLocation={true}
                provider={PROVIDER_GOOGLE} 
                style={styles.map}
                customMapStyle={mapStyle}
                ref={c => this.mapView = c}
                region={{
                    
                    latitude: 52.244996,
                    longitude: 21.034442,
                    latitudeDelta: 0.115,
                    longitudeDelta: 0.2121,
                }}>
                {scooterData.map(scooter => 
                    <Marker 
                        onPress={()=>{alert('kurwa')}} 
                        key={scooter.id} 
                        coordinate={{ latitude: scooter.coords.lat, longitude: scooter.coords.lng }}>
                        <EcoMarker/>
                             
                    </Marker>
                )}
                {this.props.children}
            </MapView>
        )
    }
}


const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1
    },
})