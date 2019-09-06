import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';

import RootNavigator from './navigations/Root';

import { Provider } from 'mobx-react';
import stores from './stores';


export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <View style={styles.container}>
          <RootNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


console.disableYellowBox = true;