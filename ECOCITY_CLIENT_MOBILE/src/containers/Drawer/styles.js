import colors from '../../globals/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    globalPadding: {
        paddingHorizontal: 50,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: colors.GREEN2,
    },
    header: {
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderBottomColor: 'white',
        borderBottomWidth: 0.3,
        marginTop: '20%',
        paddingVertical: 20,
    },
    image: {
        flex:1,
        alignSelf: 'stretch',
        width: 100,
        height: 60,
        resizeMode: "contain",
    },
    shortInfo: {
        flex: 0.5,
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'violet'
    },
    menu: {
        flex: 4
    },
    footer: {
        flex: 1
    }
});