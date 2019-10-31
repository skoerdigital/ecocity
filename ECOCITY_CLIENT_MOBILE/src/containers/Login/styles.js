import colors from '../../globals/colors';
import { StyleSheet } from 'react-native';
import sizes from "../../globals/sizes";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: sizes.PADDING_VERTICAL,
        paddingHorizontal: sizes.PADDING_HORIZONTAL*2
    },
    header: {
        color: colors.GREEN3
    },
    logo: {
        resizeMode: 'contain',
        width: '30%'
    },
    inputGroup: {
        paddingTop: 40,
        paddingHorizontal: 20,
        width: '100%',
        textAlign: 'center'
    },
    input: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.GREYLIGHT,
        fontSize: 16,
        marginVertical: 20,
        textAlign: 'center'
    },
    // bottom of screen
    circle:{
        backgroundColor: colors.GREEN1,
        opacity: 0.7,

    }
});
