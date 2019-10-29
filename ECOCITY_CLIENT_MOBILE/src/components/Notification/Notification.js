import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import colors from '../../globals/colors';
import TextH2 from '../../components/UI/TextH2';
import TextSmallInfo from '../../components/UI/TextSmallInfo';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default notification = (props) => {

    const [opened, toggleBox] = useState(false);
    
    return (
        <TouchableWithoutFeedback 
        onPress={()=> toggleBox(!opened)}
        >
            <Animatable.View     
                animation="fadeInUp"
                easing={'ease-in-out'}
                delay={(0.5*props.index)*300}
                useNativeDriver={true}
                duration={400}
                style={styles.container}>                
                    <Animatable.View style={styles.top}>
                        <View style={styles.line}>
                            <TextH2 style={styles.date}>{props.title}</TextH2>
                        </View>
                        <View style={styles.line}>
                            <TextSmallInfo >{props.timestamp}</TextSmallInfo>
                        </View>
                        <Animatable.View 
                            style={[styles.line, { marginTop: opened ? 25 : 0, height: opened ? null : 0 }]}>
                            <TextSmallInfo >{props.message}</TextSmallInfo>
                        </Animatable.View>
                    </Animatable.View>

            </Animatable.View>
        </TouchableWithoutFeedback>
)}


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
        alignItems: 'flex-start',
        marginBottom: 10
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
