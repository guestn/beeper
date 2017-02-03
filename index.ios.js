/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
//import MotionManager from './components/Motion';
import GyroscopeManager from './components/GyroscopeManager';
import AccelerometerManager from './components/AccelerometerManager';
import MagnetometerManager from './components/Magnetometer';
import S from './styles';

var routes = {
  gyroscope: {
    title: 'Gyroscope',
    component: GyroscopeManager
  },
  accelerometer: {
    title: 'Accelerometer',
    component: AccelerometerManager
  },
  magnetometer: {
    title: 'Magnetometer',
    component: MagnetometerManager
  }
};

var routes = {
  gyroscope: {
    title: 'Gyroscope',
    component: GyroscopeManager
  },
  accelerometer: {
    title: 'Accelerometer',
    component: AccelerometerManager
  },
  magnetometer: {
    title: 'Magnetometer',
    component: MagnetometerManager
  }
};

export class MotionManager extends Component {
  handleNavigationPress(route) {
    this.props.navigator.push(route);
  }
  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: 100,
      }}>
        <Text style={S.button} onPress={this.handleNavigationPress.bind(this, routes.accelerometer)}>Accelerometer</Text>
        <Text style={S.button} onPress={this.handleNavigationPress.bind(this, routes.gyroscope)}>Gyroscope</Text>
        <Text style={S.button} onPress={this.handleNavigationPress.bind(this, routes.magnetometer)}>Magnetometer</Text>
      </View>
    );
  }
};

routes.motion = {
  title: 'Motion',
  component: MotionManager
};

export class App extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{
          flex: 1,
          backgroundColor: '#ffffff'
        }}
        initialRoute={routes.motion} />
    );
  }
};

AppRegistry.registerComponent('beeper', () => App);


