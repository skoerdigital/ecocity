import {StyleSheet} from 'react-native';
import colors from '../../globals/colors';
import sizes from '../../globals/sizes';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: colors.GREYBG,
        paddingVertical: sizes.PADDING_VERTICAL,
        paddingHorizontal: sizes.PADDING_HORIZONTAL
    },
    buttons: {
        marginVertical: 10
    },
    balanceContainer: {
        flex: 0,
        height: '50%',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 30,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontFamily: 'Montserrat-Regular',
        fontWeight: '500',
        fontSize: 24,
        color: colors.GREYDARK,
    },
    amount: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: '800',
        fontSize: 50,
        color: colors.GREEN3,
        marginVertical: 20,
    },
    button: {
        fontSize: 20,
        textTransform: 'uppercase',

    }
});