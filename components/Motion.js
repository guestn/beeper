/**
 * MotionManger
 *
 * Created by Patrick Williams in beautiful Seattle, WA.
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  DeviceEventEmitter
} from 'react-native';

var GyroscopeManager = require('./GyroscopeManager');
var AccelerometerManager = require('./AccelerometerManager');
var MagnetometerManager = require('./Magnetometer');
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



export default class MotionManager extends Component {
  handleNavigationPress(route) {
    this.props.navigator.push(route);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: 100,
      }}>
        <Text onPress={this.handleNavigationPress.bind(this, routes.accelerometer)}>Accelerometer</Text>

      </View>
    );
  }
};



/*
        <TouchableHighlight onPress={this.handleNavigationPress.bind(this, routes.accelerometer)}>Accelerometer</TouchableHighlight>
        <TouchableHighlight onPress={this.handleNavigationPress.bind(this, routes.gyroscope)}>Gyroscope</TouchableHighlight>
        <TouchableHighlight onPress={this.handleNavigationPress.bind(this, routes.magnetometer)}>Magnetometer</TouchableHighlight>
*/
