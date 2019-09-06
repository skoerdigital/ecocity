import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import styles from './styles';
import { RNCamera } from 'react-native-camera';
import * as Animatable from 'react-native-animatable';
import { NavigationActions } from 'react-navigation';


import images from '../../globals/images';
import { observer, inject } from 'mobx-react';
import InputModal from '../../components/InputModal/InputModal';




@inject('scanStore')
@observer
export default class ScanContainer extends Component {

    componentDidMount(){
        this.shouldReadBarcode = true;
    }
    
    // componentDidUpdate(){
    //     console.log(`Changed ${this.props}`);
    // }

    componentWillUnmount(){
        this.props.scanStore.turnOffLight();
    }

    render(){
        return(
            <React.Fragment>
                
                <InputModal/>
                <View style={styles.container}>
                    <Animatable.View 
                        animation={'fadeInUp'}
                        duration={500}
                        delay={300}
                        style={styles.infoOverlay}>
                        <View style={styles.infoIcon}>
                            <Image
                                source={images.BIKE_ICON}
                                style={styles.bikeIcon}
                                />
                        </View>
                        
                        <View style={styles.buttons}>
                            <View 
                                style={[styles.button]}>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.props.scanStore.toggleLight();
                                    }}>
                                    <Image
                                    source={this.props.scanStore.light ? images.BUTTON_LIGHT_ON : images.BUTTON_LIGHT }
                                    style={styles.buttonImage}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={[styles.button]}>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.props.scanStore.togglePromptInput();
                                    }}>
                                    <Image
                                    source={images.BUTTON_CODE}
                                    style={styles.buttonImage}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                            
                        </View>
                    </Animatable.View>
                    <View style={styles.overlay}>
                        <Image
                            source={images.OVERLAY_SCAN}
                            style={styles.imageOverlay}
                            />
                    </View>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={{
                            flex: 1,
                            alignItems: 'flex-end'
                        }}
                        flashMode={this.props.scanStore.light ? 'torch' : 'off'}
                        onBarCodeRead={this.shouldReadBarcode ? ()=>{
                            this.shouldReadBarcode = false;
                        } : null }
                    >
                    </RNCamera>
                </View>
            </React.Fragment>
        )
    }
}