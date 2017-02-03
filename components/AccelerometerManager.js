/**
 * AccelerometerManager
 *
 * Created by Patrick Williams in beautiful Seattle, WA.
 */
'use strict';

import React,  { Component } from 'react';
import {
  Text,
  View,
  DeviceEventEmitter,
  NativeModules

} from 'react-native';
import S from '../styles';
import Soundmaker from './Soundmaker';

var {
    Accelerometer, DeviceAngles
} = require('NativeModules');

//console.log(NativeModules)

//const Accelerometer = NativeModules.Accelerometer

Accelerometer.setAccelerometerUpdateInterval(0.5);

DeviceAngles.setDeviceMotionUpdateInterval(0.5);


export default class AccelerometerManager extends Component {
	constructor(props) {
		super(props);
		 this.state = {
	   	x: 0,
      y: 0,
      z: 0,
      pitch: 0,
      roll: 0,
      yaw: 0,
      gyro: false
  	}
	}
   
  componentDidMount() {
    DeviceEventEmitter.addListener('AccelerationData', function (data) {
      this.setState({
        x: data.acceleration.x.toFixed(5),
        y: data.acceleration.y.toFixed(5),
        z: data.acceleration.z.toFixed(5)
      });
    }.bind(this));
    
    DeviceEventEmitter.addListener('AnglesData', function (data) {
      this.setState({
        pitch: data.pitch.toFixed(2),
        roll: data.roll.toFixed(2),
        yaw: data.yaw.toFixed(2)
      });
		}.bind(this))
  }
  
  componentWillUnmount() {
    Accelerometer.stopAccelerometerUpdates();
  }
  
  handleStart() {
    Accelerometer.startAccelerometerUpdates();
    DeviceAngles.startMotionUpdates();
    this.setState({
      gyro: true
    });
  }
  
  handleStop() {
    Accelerometer.stopAccelerometerUpdates();
    this.setState({
      x: 0,
      y: 0,
      z: 0,
      pitch: 0,
      roll: 0,
      yaw: 0,
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
        <Text>pitch: {this.state.pitch}</Text>
        <Text>roll: {this.state.roll}</Text>
        <Text>yaw: {this.state.yaw}</Text>
        {
          (this.state.gyro) ?
          <Text style={[{color: 'red', margin: 20}, S.button]} onPress={this.handleStop.bind(this)}>Stop</Text> :
          <Text style={[{color: 'green', margin: 20}, S.button]} onPress={this.handleStart.bind(this)}>Start</Text>
        }
        <Soundmaker accel={this.state.x}/>
      </View>
    );
  }
};

//module.exports = AccelerometerManager;
