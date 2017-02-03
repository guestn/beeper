/**
 * GyroscopeManager
 *
 * Created by Patrick Williams in beautiful Seattle, WA.
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  DeviceEventEmitter,
  NativeModules
} from 'react-native';


import {
    Gyroscope
} from 'NativeModules';


//const Gyroscope = NativeModules.Gyroscope;



Gyroscope.setGyroUpdateInterval(0.1);

export default class GyroscopeManager extends Component {
  constructor(props) {
  	super(props);
	  this.state = {
	      x: 0,
	      y: 0,
	      z: 0,
	      gyro: false
	  }
	}
	  
  componentDidMount() {
    DeviceEventEmitter.addListener('GyroData', function (data) {
      this.setState({
        x: data.rotationRate.x.toFixed(5),
        y: data.rotationRate.y.toFixed(5),
        z: data.rotationRate.z.toFixed(5)
      });
    }.bind(this));
  }
  
  componentWillUnmount() {
    Gyroscope.stopGyroUpdates();
  }
  
  handleStart() {
    Gyroscope.startGyroUpdates();
    this.setState({
      gyro: true
    });
  }
  
  handleStop() {
    Gyroscope.stopGyroUpdates();
    this.setState({
      x: 0,
      y: 0,
      z: 0,
      gyro: false
    });
  }
  
  render() {
    console.log(this.state);
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>x: {this.state.x}</Text>
        <Text>y: {this.state.y}</Text>
        <Text>z: {this.state.z}</Text>
        {
          (this.state.gyro) ?
          <Text style={{color: 'red', margin: 20}} onPress={this.handleStop.bind(this)}>Stop</Text> :
          <Text style={{color: 'green', margin: 20}} onPress={this.handleStart.bind(this)}>Start</Text>
        }
      </View>
    );
  }
};
