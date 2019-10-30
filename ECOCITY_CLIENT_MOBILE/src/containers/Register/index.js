import React, { Component } from 'react';
import { ScrollView, Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';

import styles from './styles';
import * as Animatable from "react-native-animatable";
import StandardButton from "../../components/UI/Button";
import CheckBox from 'react-native-check-box'
import colors from "../../globals/colors";

export default class RegisterContainer extends Component {
    constructor(){
        super();
        this.state = {
            isChecked: true
        }
    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <ScrollView style={{ flex: 1}}>

                    <View style={styles.container}>
                        <Text style={styles.claim}>
                            We need you to place your details to provide full functionality of Ecocity application.
                        </Text>
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
                                keyboardType={'phone-pad'}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="E-mail"
                                onChangeText={(text) => console.log(text)}
                                value={null}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Name"
                                onChangeText={(text) => console.log(text)}
                                value={null}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Surname"
                                onChangeText={(text) => console.log(text)}
                                value={null}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                onChangeText={(text) => console.log(text)}
                                value={null}
                                secureTextEntry={true}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                onChangeText={(text) => console.log(text)}
                                value={null}
                                secureTextEntry={true}
                            />
                        </Animatable.View>
                        <Animatable.View
                            style={{flex: 0, width: '100%'}}
                            animation="fadeIn"
                            duration={300}
                            delay={300}>
                            <StandardButton
                                handleParentMethod={()=> (this.props.navigation.navigate('Main'))}
                                style={{flex: 0, width: '100%'}}> Sign in </StandardButton>
                        </Animatable.View>
                        <CheckBox
                            style={{flex: 1, justifyContent: 'center', width: '100%', alignItems: 'center', alignSelf: 'stretch',paddingVertical: 20}}
                            checkBoxColor={colors.GREYDARK}
                            checkedCheckBoxColor={colors.GREEN3}
                            onClick={()=>{
                                this.setState({
                                    isChecked:!this.state.isChecked
                                })
                            }}
                            isChecked={this.state.isChecked}
                            rightText={"I agree with Terms of Rules and Policy"}
                            rightTextStyle={styles.checkboxLabel}
                        />
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}
