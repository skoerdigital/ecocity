import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
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

export default inject('modalStore', 'mapStore', 'scooterStore')(observer(RideScooterModal = React.forwardRef((props, ref) => {
    return (<Modal 
        isOpen={props.scooterStore.isRideActive}
        style={styles.modal}
        backdrop={false}  
        position={"top"} 
        backdropPressToClose={true}
        entry={"top"}
        backdropOpacity={0.15}
        onClosed={() =>  
            {
                props.modalStore.onModalClose()
                props.mapStore.onDisactiveMarker();
            }
        }
        /*ref={ref}*/>
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.scooterInfo}>
                    <View style={styles.scooterParameters}>
                        <View style={styles.scooterParameter}>
                            <TextSmall style={styles.scooterParameterName}>Distance</TextSmall>
                            <TextH1 style={styles.scooterParameterValue}>{calculateMeters(props.mapStore.selectedScooter.battery)}</TextH1>
                            <TextSmall style={styles.scooterParameterUnit}>KM</TextSmall>
                        </View>
                        <View style={styles.scooterParameter}>
                            <TextSmall style={styles.scooterParameterName}>Time</TextSmall>
                            <TextH1 style={styles.scooterParameterValue}>{calculateMinutes(props.scooterStore.timeElapsed)}</TextH1>
                            <TextSmall style={styles.scooterParameterUnit}>MIN</TextSmall>
                        </View>
                        <View style={[styles.scooterParameter, {marginRight: 0}]}>
                            <TextSmall style={styles.scooterParameterName}>Battery</TextSmall>
                            <TextH1 style={styles.scooterParameterValue}>{props.mapStore.selectedScooter.battery+'%'}</TextH1>
                            <BatteryLevel batteryLevel={props.mapStore.selectedScooter.battery} style={{flex: 0.5}}/>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.buttons}>
                
                <StandardButton 
                    handleParentMethod={()=>{
                        props.scooterStore.onFindScooterAsync(props.mapStore.selectedScooter.id)
                    }}
                    style={{marginRight: 5}}>Pause ride</StandardButton>
                <StandardButton 
                    handleParentMethod={()=>{
                        props.scooterStore.onLockScooterAsync(props.mapStore.selectedScooter.id)
                    }}
                    style={{marginLeft: 5}}>Stop ride</StandardButton>
            </View>
        </View>
    </Modal>)
})))

const styles = StyleSheet.create({
    modal: {
        backgroundColor: colors.GREEN4,
        height: '25%',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 30,
        
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginBottom: 20
    }, 
    buttons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 20
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
        color: colors.GREEN3,
        marginTop: 10
    },  
    costsInfo: {
        flex: 0,
        textTransform: 'none',
        color: colors.YELLOW,
        marginVertical: 15, 
    }
})
