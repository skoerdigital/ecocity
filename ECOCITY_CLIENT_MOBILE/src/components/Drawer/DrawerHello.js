import React, { Component } from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import colors from '../../globals/colors';
import images from '../../globals/images';
import TextH2 from '../UI/TextH2';

export default class DrawerHello extends Component {

    render(){
        return(
            <View style={[styles.shortInfo, this.props.style]}>
                <TextH2 style={styles.hello}>
                    Hello, tomgrandson
                </TextH2>
                <View style={styles.statsContainer}>
                    <View style={styles.stat}>
                        <Image
                            style={styles.statIcon}
                            source={images.SCOOTER_ICON}/>
                            <View style={styles.statValue}>
                                <Text style={styles.counter}>12</Text>
                                <Text style={styles.units}>RIDES</Text>
                            </View>
                    </View>
                    <View style={styles.stat}>
                    <Image
                            style={styles.statIcon}
                            source={images.ROUTE_ICON}/>
                            <View style={styles.statValue}>
                                <Text style={styles.counter}>12</Text>
                                <Text style={styles.units}>MILES</Text>
                            </View>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    shortInfo: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingVertical: 25,
        borderBottomColor: colors.YELLOW,
        borderBottomWidth: 0.3,
    },
    hello: {
        flex: 0,
        fontFamily: 'Montserrat-SemiBold', 
        flexWrap: 'wrap',
        color: colors.YELLOW,
        fontSize: 18,
        marginBottom: 10,
    },
    statsContainer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    statIcon: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 35,
        height: 35,
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
    counter: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 26,
        color: colors.YELLOW
    },
    units: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 10,
        letterSpacing: 2,
        color: colors.YELLOW
    }
    
});