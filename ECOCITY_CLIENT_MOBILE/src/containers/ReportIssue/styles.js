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
    form: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: "column"
    }, 
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 7,
        marginVertical: 7,
    },
    formGroup:  {
        marginBottom: 5
    },
    qrIcon: {
        position: 'absolute',
        width: 20,
        height: 20,
        right: 7
    },
    label: {
        textTransform: "uppercase",
        color: colors.GREYDARK,
        fontSize: 10,
        letterSpacing: 1
    },
    attach_picture_btn: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        height: 30, 
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    attach_picture_img: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    attach_picture_text: {
        textTransform: "uppercase",
        fontFamily: "Montserrat-Regular",
        fontSize: 12,
        letterSpacing: 1,
        marginLeft: 7,
        color: colors.GREYDARK
    },
});