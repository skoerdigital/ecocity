import {StyleSheet} from 'react-native';
import colors from '../../globals/colors';
import sizes from '../../globals/sizes';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.GREYBG,
        // paddingVertical: sizes.PADDING_VERTICAL,
        // paddingHorizontal: sizes.PADDING_HORIZONTAL
    },
    overlay: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0,
        zIndex: 2
    },
    imageOverlay:{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    infoOverlay: {
        position: 'absolute',
        top: '60%', bottom: '10%', left: 0, right: 0,
        zIndex: 3,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 20,
    },
    infoIcon: {        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bikeIcon: {
        resizeMode: 'contain',
        flex: 1
    },
    buttons: {
        flex: 0.6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 15
    },
    button: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonImage: {
        alignSelf: 'flex-end',
        maxHeight: '100%',
        maxWidth: '100%',
        resizeMode: 'contain'
    }
});