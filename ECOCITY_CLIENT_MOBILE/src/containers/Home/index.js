import React, { Component, createRef } from 'react';
import { View, Image, Text, Animated, Easing } from 'react-native';
import { DrawerActions, NavigationActions } from 'react-navigation';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { inject, observer } from 'mobx-react';

import images from '../../globals/images';
import styles from './styles';
import HomeMap from '../../components/Map/MapComponent';
import SingleScooterModal from '../../components/Modals/SingleScooterModal';
import ScanButton from '../../components/UI/ScanButton';
import * as Animatable from 'react-native-animatable';




@inject('scooterStore', 'mapStore')
@observer
export default class HomeContainer extends Component {

    constructor(props){
        super(props);
        this.homeMap = createRef()
    }

    spinValue = new Animated.Value(0)

    

    static navigationOptions = ({navigation}) => ({
        headerTitle: (<Animatable.Image animation={'slideInDown'} duration={500} delay={250} style={{ width: 90, height: 39 }} source={images.LOGO_MONO_GREEN}/>),
        headerLeft: (
            <TouchableWithoutFeedback onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer())
            }}>
                <Image  
                style={{ width: 25, height: 25, marginHorizontal: 10 }} 
                source={images.MENU}/>
            </TouchableWithoutFeedback>
        ),
        headerRight: (<TouchableWithoutFeedback onPress={() => {
            navigation.navigate('Notifications');
        }}>
            <Image  
                style={{ width: 20, height: 20, marginHorizontal: 15 }} 
                source={images.BELL}/>
        </TouchableWithoutFeedback>)
    })

    onOpenScanner(){
        this.props.navigation.navigate('Scan');
    }

    onOpenNotifications(){
        this.props.navigation.navigate('Notifications');
    }

    onOpenReportIssue(){
        this.props.navigation.navigate('ReportIssue');
    }

    onCenterPosition(){
        this.homeMap.current.wrappedInstance.onAnimateCameraToCoords(this.props.mapStore.currentPosition)
    }

    onAnimateButton(){
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 1500,
                easing: Easing.bounce,
                useNativeDriver: true
            }
        ).start();
    }


    render(){
        
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        return(
            <View style={styles.container}>
                <View style={styles.bottomButtons}>
                    <TouchableWithoutFeedback 
                        onPress={() => this.onOpenReportIssue()}>
                            <Image
                                style={{width: 40, height: 40}}
                                source={images.HELP_BUTTON}/>
                    </TouchableWithoutFeedback>
                    <ScanButton
                        size={100}
                        scaleValue={0.5}
                        openScannerHandler={() => this.onOpenScanner()}/>
                    <View style={{flex: 0}}>
                        <TouchableWithoutFeedback 
                            onPress={() => this.onCenterPosition()}>
                                <Image
                                    style={{width: 40, height: 40, marginBottom: 15 }}
                                    source={images.LOCATE_BUTTON}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={ () => this.onAnimateButton() } >
                                <Animated.Image
                                    style={{width: 40, height: 40, transform: [{rotate: spin}]}}
                                    source={images.REFRESH_BUTTON}/>
                        </TouchableWithoutFeedback> 
                    </View>
                </View>
                <HomeMap
                    ref={this.homeMap}>
                </HomeMap>
                <SingleScooterModal/>
            </View>
        )
    }
}
