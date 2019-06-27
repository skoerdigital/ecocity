import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modalbox';
import colors from '../../globals/colors';
import { inject, observer } from 'mobx-react';
import images from '../../globals/images';
import TextSmall from '../../components/UI/TextSmall';
import TextH1 from '../../components/UI/TextH1';
import TextSmallInfo from '../UI/TextSmallInfo';
import StandardButton from '../UI/Button';
import BatteryLevel from '../Battery/BatteryLevel';

const MAX_TIME = 150; // minutes
const MAX_RANGE = 45; //km


const timeConvert = (n) => {
    const num = n;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${rhours}:${rminutes}`;
}


const calculateMinutes = (batteryLevel) => {
    return timeConvert(Math.round(batteryLevel * 0.01 * MAX_TIME))
}

const calculateMeters = (batteryLevel) => {
    return (batteryLevel * 0.01 * MAX_RANGE).toFixed(1)
}

export default inject('modalStore')(observer(SingleScooterModal = React.forwardRef((props, ref) => {
    return (<Modal 
        isOpen={props.modalStore.isOpen}
        style={styles.modal}
        backdrop={true}  
        position={"top"} 
        backdropPressToClose={true}
        entry={"top"}
        onClosed={() =>  props.modalStore.onModalClose()}
        /*ref={ref}*/>
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.id}>
                    <Image
                        style={styles.scooterIcon}
                        source={images.SCOOTER_ICON}/>
                    <TextSmall style={styles.idNumber}>{props.modalStore.selectedScooter.id}</TextSmall>
                </View>
                <View style={styles.scooterInfo}>
                    <View style={styles.scooterParameters}>
                        <View style={styles.scooterParameter}>
                            <TextSmall style={styles.scooterParameterName}>Distance</TextSmall>
                            <TextH1 style={styles.scooterParameterValue}>{calculateMeters(props.modalStore.selectedScooter.battery)}</TextH1>
                            <TextSmall style={styles.scooterParameterUnit}>KM</TextSmall>
                        </View>
                        <View style={styles.scooterParameter}>
                            <TextSmall style={styles.scooterParameterName}>Time</TextSmall>
                            <TextH1 style={styles.scooterParameterValue}>{calculateMinutes(props.modalStore.selectedScooter.battery)}</TextH1>
                            <TextSmall style={styles.scooterParameterUnit}>MIN</TextSmall>
                        </View>
                        <View style={[styles.scooterParameter, {marginRight: 0}]}>
                            <TextSmall style={styles.scooterParameterName}>Battery</TextSmall>
                            <TextH1 style={styles.scooterParameterValue}>{props.modalStore.selectedScooter.battery+'%'}</TextH1>
                            <BatteryLevel batteryLevel={props.modalStore.selectedScooter.battery} style={{flex: 0.5}}/>
                        </View>
                    </View>
                    <TextSmallInfo style={styles.costsInfo}>$1 to unlock + $0,49 per minute</TextSmallInfo>
                </View>
            </View>
            <View style={styles.buttons}>
                <StandardButton style={{marginRight: 5}}>Find</StandardButton>
                <StandardButton style={{marginLeft: 5}}>Report missing</StandardButton>
            </View>
        </View>
    </Modal>)
})))

const styles = StyleSheet.create({
    modal: {
        backgroundColor: colors.GREEN2,
        height: '31%',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 30,
        
    },
    mainContainer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    }, 
    id: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 10
    },
    scooterInfo:{
        flex: 3,
        flexDirection: 'column',
        margin: 10,
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    scooterParameters: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    scooterParameter: {
        marginRight: 5,
        flex: 0,
        flexDirection: 'column'
    },
    scooterParameterName: {
        color: colors.YELLOW,
        marginBottom: 5
    },
    scooterParameterValue: {
        color: 'white',
        fontSize: 25,
    },
    scooterParameterUnit: {
        color: 'white',
        fontSize: 9.5,
    },
    scooterIcon: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: "contain"
    },
    idNumber: {
        backgroundColor: 'white',
        padding: 3,
        textAlign: 'center',
        color: colors.GREEN3
    },  
    costsInfo: {
        flex: 0,
        textTransform: 'none',
        color: colors.YELLOW,
        marginVertical: 15, 
    },
    buttons:{
        flex: 0,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    }
})
