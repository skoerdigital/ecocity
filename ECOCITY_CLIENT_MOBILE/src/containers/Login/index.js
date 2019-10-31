import React, { Component } from 'react';
import { View,  Image, Text, TextInput, Keyboard, TouchableWithoutFeedback, Dimensions } from 'react-native';
import images from '../../globals/images';
import styles from './styles';
import StandardButton from "../../components/UI/Button";
import * as Animatable from 'react-native-animatable';
import colors from "../../globals/colors";

export default class LoginContainer extends Component {

    render(){
        const { width } = Dimensions.get('window');

        const fadeIn = {
            from: {
                opacity: 0,
                top: "50%"
            },
            to: {
                opacity: 0.45,
                top: "0%"
            },
        };

        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={{ flex: 1}}>
                    <View style={styles.container}>
                        <Animatable.Image
                            animation="fadeInUp"
                            duration={600}
                            source={images.LOGO}
                            style={styles.logo}
                        />
                        <Animatable.View
                            animation="fadeInUp"
                            duration={600}
                            delay={150}
                            style={styles.inputGroup}>
                            <TextInput
                                style={styles.input}
                                placeholder="Telephone number"
                                onChangeText={(text) => console.log(text)}
                                value={null}
                                keyboardType={'phone-pad'}/>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                onChangeText={(text) => console.log(text)}
                                value={null}
                                secureTextEntry={true}
                            />
                        </Animatable.View>
                        <Animatable.View
                            style={{flex: 0, width: '100%', marginTop: 10}}
                            animation="fadeIn"
                            duration={300}
                            delay={300}>
                            <StandardButton
                                handleParentMethod={()=> (this.props.navigation.navigate('Main'))}
                                style={{flex: 0, width: '100%'}}> Sign in </StandardButton>
                        </Animatable.View>
                        <Animatable.Text
                            onPress={()=> (this.props.navigation.navigate('Register'))}
                            animation="fadeInUp"
                            duration={500}
                            delay={1000}
                            style={{
                                flex: 1,
                                alignSelf: 'center',
                                color: colors.GREEN2,
                                marginTop: 20,
                                fontFamily: 'Montserrat-Semibold',
                            }}
                        >Not registered? Sign up</Animatable.Text>
                    </View>
                    <View style={{ flex: 0.4, overflow: 'hidden'}}>

                        <Animatable.View
                                animation="fadeInRight"
                                style={{ position: 'relative', flex: 1, bottom: 0}}>
                            <Image

                                source={images.SCOOTER_DRAW}
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    top: 0,
                                    flex: 1,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',
                                    width: '100%',
                                    height: '100%' }}
                            />
                        </Animatable.View>
                        {/*<Animatable.View*/}
                        {/*    animation={fadeIn}*/}
                        {/*    duration={800}*/}
                        {/*    delay={800}*/}
                        {/*    style={[{*/}
                        {/*        position: 'absolute',*/}
                        {/*        width: width*1.2,*/}
                        {/*        height: width*1.2,*/}
                        {/*        marginTop: 45,*/}
                        {/*        marginLeft: - (width*1.2 - width) / 2,*/}
                        {/*        borderRadius: width*1.2/2*/}
                        {/*}, styles.circle]}></Animatable.View>*/}
                    </View>
                </View>
            </TouchableWithoutFeedback>

        )
    }
}
