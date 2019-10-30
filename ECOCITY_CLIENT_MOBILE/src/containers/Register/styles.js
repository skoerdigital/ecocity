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
        paddingVertical: 40,
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
    claim: {
        fontFamily: 'Montserrat-Regular',
        color: colors.GREYLIGHT,
        textAlign: 'center',
        marginTop: 70
    },
    checkboxLabel: {
        fontFamily: 'Montserrat-Regular',
        color: colors.GREYDARK
    }

});
