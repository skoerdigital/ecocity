import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { inject, observer } from 'mobx-react';

import images from '../../globals/images';
import styles from './styles';
import HomeMap from '../../components/Map/MapComponent';
import SingleScooterModal from '../../components/Modals/SingleScooterModal';


@inject('scooterStore')
@observer
export default class HomeContainer extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: (<Image style={{ width: 90, height: 39 }} source={images.LOGO_MONO_GREEN}/>),
        headerLeft: (
            <TouchableWithoutFeedback onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer())
            }}>
                <Image  
                style={{ width: 25, height: 25, marginHorizontal: 10 }} 
                source={images.MENU}/>
            </TouchableWithoutFeedback>
        ),
        headerRight: (<TouchableWithoutFeedback onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer())
        }}>
            <Image  
                style={{ width: 20, height: 20, marginHorizontal: 15 }} 
                source={images.BELL}/>
        </TouchableWithoutFeedback>)
    })

    onOpenScanner(){
        this.props.navigation.navigate('Wallet')
    }

    // onShowSingle(scooter){
    //     this.props.modalStore.toggleModal();
    // }

    render(){
        
        return(
            <View style={styles.container}>
                <View style={styles.bottomButtons}>
                    <TouchableWithoutFeedback 
                        onPress={() => this.onOpenScanner()}>
                            <Image
                                style={{width: 40, height: 40}}
                                source={images.HELP_BUTTON}/>
                        
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback 
                        onPress={(scooter) => this.onShowSingle(scooter)}>
                            <Image
                                style={styles.scanButton}
                                source={images.SCAN_BUTTON}/>
                        
                    </TouchableWithoutFeedback>
                    
                    <View style={{flex: 0}}>
                        <TouchableWithoutFeedback 
                            onPress={() => this.onOpenScanner()}>
                                <Image
                                    style={{width: 40, height: 40, marginBottom: 15}}
                                    source={images.LOCATE_BUTTON}/>
                            
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback 
                            onPress={() => this.onOpenScanner()}>
                                <Image
                                    style={{width: 40, height: 40}}
                                    source={images.REFRESH_BUTTON}/>
                            
                        </TouchableWithoutFeedback> 
                    </View>
                    
                </View>
                <HomeMap 
                    showsUserLocation={true}
                    //onShowSingleScooter={(scooter) => this.onShowSingle(scooter)}
                    >
                </HomeMap>
                <SingleScooterModal
                    // scooter={this.selectedScooter}
                />
            </View>
        )
    }
}
