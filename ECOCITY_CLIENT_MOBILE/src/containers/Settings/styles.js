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
    label: {
        textTransform: "uppercase",
        color: colors.GREYDARK,
        fontSize: 10,
        letterSpacing: 1
    }
});