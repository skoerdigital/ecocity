import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import colors from '../../globals/colors';
import TextH2 from '../../components/UI/TextH2';
import TextSmallInfo from '../../components/UI/TextSmallInfo';

export default singleRide = (props) => (

    <View style={styles.container}>
        <View style={styles.top}>
            <View style={styles.line}>
                <TextH2 style={styles.date}>Sunday, 15 June</TextH2>
                <TextH2 style={styles.price}>45$</TextH2>
            </View>
            <View style={styles.line}>
                <TextSmallInfo style={styles.time}>3:45 - 3:58 PM</TextSmallInfo>
            </View>
            
        </View>
        <View style={styles.bottom}>
            <Text>Test214</Text>
            <Text>Test214</Text>
        </View>
    </View>
)


const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: 'white',
        flex: 0,
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        marginBottom: 25,
        overflow: "hidden",
        shadowColor: "#000",
    },
    top: {
        flex: 0,
        flexDirection: 'column',
        // justifyContent: 'space-between',
        // alignItems: 'stretch',
        width: '100%',
        padding: 25,
    },
    bottom: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        width: '100%',
        backgroundColor: colors.GREEN2,
        padding: 25,
    },
    line: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    date: {
        fontWeight: '300',
        fontSize: 16,
        color: colors.GREYDARK
    },
    price: {
        fontWeight: '500',
        fontSize: 18,
        color: colors.GREYDARK
    },
    time: {
        flex: 0,
        color: colors.GREYLIGHT,
        fontSize: 11,
        marginVertical: 8
    }
})
