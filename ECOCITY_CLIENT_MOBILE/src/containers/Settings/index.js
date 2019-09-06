import React,  { Component } from 'react';
import { View, Text, TextInput} from 'react-native';
import styles from './styles';
import StandardButton from '../../components/UI/Button';


export default class SettingsContainer extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Type here to translate!"
                            onChangeText={(text) => console.log(text)}
                            value={'Tomasz'}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Surname</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Type here to translate!"
                            onChangeText={(text) => console.log(text)}
                            value={'Wnuk'}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Type here to translate!"
                            onChangeText={(text) => console.log(text)}
                            value={'tomas.grandson@gmail.com'}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Mobile number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Type here to translate!"
                            onChangeText={(text) => console.log(text)}
                            value={'+48 793401061'}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Type here to translate!"
                            onChangeText={(text) => console.log(text)}
                            value={'value12345'}
                            secureTextEntry={true}
                            autoCompleteType={'password'}
                        />
                    </View>
                    <StandardButton style={{flex: 0}}>
                        Submit
                    </StandardButton>
                </View>
            </View>
        )
    }
}


