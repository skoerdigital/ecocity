import colors from '../../globals/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    bottomButtons: {
        position: 'absolute',
        padding: 30,
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        flexDirection: 'row',
        alignItems: "center",
        alignContent: "stretch",
        justifyContent: 'space-between',
    },
    scanButton: {
        width: 100,
        height: 100
    },  
    button: {
        fontFamily: 'Montserrat-Bold',   
    }
});