import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';

import RootNavigator from './navigations/Root';
import { Notification as Flash } from "react-native-in-app-message";

import { Provider } from 'mobx-react';
import stores from './stores';


export default class App extends Component {

// constructor() {
//     super();
//     this.state = {
//         animating: false,
//         align: 'center',
//         alignsecond: false,
//     };
//     setTimeout(
//         () =>
//             this.setState({ align: 'flex-start' }, function() {
//                 this.setState({
//                     alignsecond: true,
//                 });
//             }),
//         3000
//     );
// }
  render() {
    return (
      <React.Fragment>
        <Provider {...stores}>
          <View style={styles.container}>
            <RootNavigator />
          </View>
        </Provider>
        <Flash text={'Hello world'} showKnob={false} onPress={Flash.hide}/>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


console.disableYellowBox = true;
