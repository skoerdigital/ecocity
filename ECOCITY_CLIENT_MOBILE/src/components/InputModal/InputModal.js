import React, { createRef, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Modal from 'react-native-modalbox';
import { inject, observer } from 'mobx-react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../globals/colors';
import images from '../../globals/images';


export default inject('scanStore')(observer(InputModal = (props) => {
    return (<Modal 
        isOpen={props.scanStore.promptInput}
        style={styles.modal}
        backdrop={true}
        swipeToClose={false}  
        backdropPressToClose={false}
        entry={'center'}
        backdropOpacity={0.65}>
        <View style={styles.container}>
            <Image
                source={images.BUTTON_CODE}
                style={styles.buttonImage}
                />
            <Text style={styles.header}>Insert scooter number below</Text>
            <TextInput
                autoCapitalize={"characters"}
                style={styles.input}
                value={props.scanStore.inputValue}
                onChangeText={(val)=> {
                    props.scanStore.changeInputValue(val)
                }}
            />
            <View style={styles.buttons}>
                <TouchableOpacity style={[styles.confirm, {backgroundColor: colors.GREYLIGHT}]}
                    onPress={()=>{
                        props.scanStore.togglePromptInput();
                    }}>
                    <Text style={styles.confirmText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.confirm}
                    onPress={()=>{
                        props.scanStore.togglePromptInput();
                    }}>
                    <Text style={styles.confirmText}>Confirm</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    </Modal>)
}));

const styles = StyleSheet.create({
    modal: { 
        width: '70%',
        borderRadius: 15,
        backgroundColor: '#fff',
        height: null
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        height: 60,
    },
    container:{
        flex: 0,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 22,
        flex: 0,
        fontFamily: 'Montserrat-Semibold',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        borderBottomColor: colors.GREYLIGHT,
        borderBottomWidth: 1,
        marginVertical: 30,
        padding: 10,
        fontSize: 20,
        fontFamily: 'Montserrat-Regular',
        width: '80%',
        textTransform: 'uppercase',
        flex: 0,
        textAlign: 'center'
    },
    confirm: {
        fontFamily: 'Montserrat-Regular',
        height: null,
        justifyContent: 'center',
        alignItems: 'stretch',
        flexGrow: 1,
        flex: 1,
        padding: 15,
        alignSelf: 'stretch',
        backgroundColor: colors.GREEN1,
        borderRadius: 15
    },
    confirmText: {
        fontFamily: 'Montserrat-Bold', 
        fontSize: 18,
        color: 'white'
    } ,
    buttonImage: {
        height: 70,
        marginBottom: 25,
        resizeMode: 'contain'
    }
})