import React,  { Component } from 'react';
import { View, Text, TextInput, Image, TouchableWithoutFeedback } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import styles from './styles';
import StandardButton from '../../components/UI/Button';
import images from '../../globals/images';


export default class ReportIssueScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            qrMarginTop: 0
        }
    }
    
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Place Vehicle ID</Text>
                        <View style={{ position: 'relative'}}>
                            
                            <TextInput
                                onLayout={(event) => {
                                        this.setState({qrMarginTop: (event.nativeEvent.layout.height + 14 - 20)/2})
                                    }
                                } 
                                style={styles.input}
                                placeholder="Type here to translate!"
                                onChangeText={(text) => console.log(text)}
                                value={'Tomasz'}
                            />
                            <TouchableWithoutFeedback
                                onPress={()=> this.props.navigation.navigate('ScanHelper')}>
                            <Image
                                source={images.SCAN_QR}
                                style={[styles.qrIcon, { bottom: this.state.qrMarginTop }]}></Image>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Select type of issue</Text>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                style={styles.input}
                                textInputProps={styles.input}
                                items={[
                                    { label: 'Football', value: 'football' },
                                    { label: 'Baseball', value: 'baseball' },
                                    { label: 'Hockey', value: 'hockey' },
                                ]}
                            />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Issue Description</Text>
                        <TextInput
                            multiline = {true}
                            
                            style={[styles.input, {height: 200, paddingTop: 10}]}
                            placeholder="Type here to translate!"
                            onChangeText={(text) => console.log(text)}
                            value={null}
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


