import React, { Component } from 'react';
import {View, Image} from 'react-native';

import images from '../../globals/images';
import TextH2 from '../../components/UI/TextH2';

import DrawerHello from '../../components/Drawer/DrawerHello';
import DrawerMenu from '../../components/Drawer/DrawerMenu';

import styles from './styles';

import {observer, inject} from 'mobx-react'



@inject('listStore', 'mapStore')
@observer
export default class DrawerContainer extends Component {

    onNavigate(routeName){
        this.props.navigation.closeDrawer();
        this.props.navigation.navigate(routeName)
    }

    render(){
        return(
            <View style={styles.container}>          
                <View style={styles.header}>
                    <Image  
                    style={styles.image} 
                    source={images.LOGO_MONO_WHITE}
                    resizeMode='contain'/>
                </View>
                <DrawerHello style={styles.globalPadding}>
                
                </DrawerHello>
                <DrawerMenu {...this.props} style={[styles.menu, styles.globalPadding]}>
                
                </DrawerMenu>
                <View style={styles.footer}>
                    <TextH2>
                    
                    </TextH2>
                </View>
            </View>
        )
    }
}


