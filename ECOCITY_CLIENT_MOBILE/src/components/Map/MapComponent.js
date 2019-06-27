import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import mapStyle from '../../globals/mapStyle';
import apiKey from '../../google_api_key';
import { inject, observer } from 'mobx-react';
import EcoMarker from './EcoMarker';
import colors from '../../globals/colors'

@inject('scooterStore', 'modalStore', 'mapStore')
@observer
export default class HomeMap extends Component {

    _mapView = null;

    componentDidMount(){
        const { getScootersAsync, scooterData } = this.props.scooterStore;
        getScootersAsync()

        this.getCurrentPosition();

        this.watchPosition = navigator.geolocation.watchPosition(({ coords }) => {
            this.props.mapStore.setCurrentPosition(coords);
            this.onAnimateCameraToCoords(coords)   
        });
    }

    getCurrentPosition(){
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                this.props.mapStore.setCurrentPosition(coords);
                this.onAnimateCameraToCoords(coords)   
            },
            (error) => alert('Error: Are location services on?'),
            { enableHighAccuracy: true }
        )
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchPosition);
    }

    onAnimateCameraToCoords(coords){
        if (this._mapView) {
            this._mapView.animateToRegion({
              latitude: coords.latitude,
              longitude: coords.longitude,
              latitudeDelta: 0.025,
              longitudeDelta: 0.025
            }, 1000)
        }
    }

    onShowSingleScooter(scooter){
        this.props.modalStore.openModal(scooter);
    }

    onNavigateToCoords(){
        const destination = {
            latitude: this.props.modalStore.selectedScooter.coords.lat,
            longitude: this.props.modalStore.selectedScooter.coords.lng
        }
        return(
            this.props.modalStore.isOpen ? <MapViewDirections
                origin={this.props.mapStore.currentPosition}
                destination={destination}
                apikey={apiKey}
                strokeWidth={5}
                strokeColor={colors.GREEN1}
                onReady={result => {
                    console.log('Distance: ${result.distance} km')
                    console.log('Duration: ${result.duration} min.')
                    
                    this.mapView.fitToCoordinates(result.coordinates, {
                        edgePadding: {
                            right: (width / 20),
                            bottom: (height / 20),
                            left: (width / 20),
                            top: (height / 20),
                        }
                    });
                }}
            /> : null
        )
    }
    

    render(){
        return(
            <MapView
                {...this.props}
                followsUserLocation={true}
                provider={PROVIDER_GOOGLE} 
                style={styles.map}
                customMapStyle={mapStyle}
                ref={c => this._mapView = c}
                >
                {this.props.scooterStore.scooterData.map(scooter => 
                    <Marker 
                        onPress={() => {
                            this.onShowSingleScooter(scooter);
                            this.onAnimateCameraToCoords({ latitude: scooter.coords.lat, longitude: scooter.coords.lng })
                        }}
                        key={scooter.id} 
                        coordinate={{ latitude: scooter.coords.lat, longitude: scooter.coords.lng }}>
                        <EcoMarker/>
                        <MapView.Callout
                        >
                            <Text>Test</Text>
                        </MapView.Callout>
                    </Marker>
                )}
                {this.props.modalStore.isOpen ? this.onNavigateToCoords() : null}         
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