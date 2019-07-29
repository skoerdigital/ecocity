import {StyleSheet} from 'react-native';
import colors from '../../globals/colors';
import sizes from '../../globals/sizes';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.GREYBG,
        paddingVertical: sizes.PADDING_VERTICAL,
        paddingHorizontal: sizes.PADDING_HORIZONTAL
    }
});