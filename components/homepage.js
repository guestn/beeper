import React,
 { Component, DeviceEventEmitter } from 'react';
import { Text } from 'react-native';


import {
    Accelerometer,
    Gyroscope,
    Magnetometer
} from 'NativeModules';


export default class Homepage extends Component  {
	
	constructor(props) {
		super(props)
	}
	
	componentDidMount() {
	}
	
	getAccel() {
		DeviceEventEmitter.addListener('AccelerationData', function (data) {
	  /**
	  * data.acceleration.x
	  * data.acceleration.y
	  * data.acceleration.z
	  **/
	  	console.log('x: ',data.acceleration.x)
		});
		Accelerometer.startAccelerometerUpdates(); // you'll start getting AccelerationData events above
		//Accelerometer.stopAccelerometerUpdates();
	}
	
  render() {
    return (
      <Text>2nd Hello world!</Text>
    );
  }
}

