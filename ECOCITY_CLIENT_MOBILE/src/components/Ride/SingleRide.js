import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import colors from '../../globals/colors';
import images from '../../globals/images';
import TextH2 from '../../components/UI/TextH2';
import TextSmallInfo from '../../components/UI/TextSmallInfo';

export default singleRide = (props) => (

    <Animatable.View 
        animation="fadeInUp"
        easing={'ease-in-out'}
        delay={(0.5*props.index)*300}
        useNativeDriver={true}
        duration={400}
        style={styles.container}>
        <View style={styles.top}>
            <View style={styles.line}>
                <TextH2 style={styles.date}>{props.startTime.substr(0,10)}</TextH2>
                <TextH2 style={styles.price}>{props.chargedPrice}</TextH2>
            </View>
            <View style={styles.line}>
                <TextSmallInfo style={styles.time}>{props.startTime.substr(12,16) + ' - ' + props.endTime.substr(12,16)}</TextSmallInfo>
            </View>
            
        </View>
        <View style={styles.bottom}>
            <View style={styles.stat}>
                <Image
                    style={styles.statIcon}
                    source={images.DISTANCE_ICON}/>
                    <View style={styles.statValue}>
                        <Text style={styles.counter}>{props.distanceKilometers}</Text>
                        <Text style={styles.units}>KM</Text>
                    </View>
            </View>
            <View style={styles.stat}>
            <Image
                    style={styles.statIcon}
                    source={images.DURATION_ICON}/>
                    <View style={styles.statValue}>
                        {/* <Text style={styles.counter}>{props.duration.substr(3,5)}</Text> */}
                        <Text style={styles.units}>MIN</Text>
                    </View>
            </View>
        </View>
    </Animatable.View>
)


const styles = StyleSheet.create({
    counter: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        color: 'white'
    },
    units: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 10,
        letterSpacing: 2,
        color: 'white'
    },
    statIcon: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 35,
        height: 30,
        marginRight: 10
    },
    stat: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginRight: 20
    },
    statValue: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'baseline',
        justifyContent: 'center',
        width: undefined,
        height: undefined
    },
    container: {
        borderRadius: 15,
        backgroundColor: 'white',
        flex: 0,
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        marginVertical: 25,
        marginBottom: 5,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // marginBottom: 10,
        // elevation: 11,
    },
    top: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        width: '100%',
        padding: 25,
        paddingBottom: 15
    },
    bottom: {
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        backgroundColor: colors.GREEN2,
        padding: 25,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    line: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    date: {
        fontWeight: '500',
        fontSize: 18,
        color: colors.GREYDARK
    },
    price: {
        fontWeight: '500',
        fontSize: 20,
        color: colors.GREYDARK
    },
    time: {
        flex: 0,
        color: colors.GREYLIGHT,
        fontSize: 11,
        marginVertical: 8
    }
})
