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
	  Image,
	  DeviceEventEmitter,
	  NativeModules,
	  TouchableHighlight,
	  Dimensions
	} from 'react-native';
	import S from '../styles';
	import Soundmaker from './Soundmaker';
	import AccelBar from './AccelBar';
	import GeolocationManager from './GeolocationManager';


	import {
	    Accelerometer, DeviceAngles
	} from 'NativeModules';

	const {height, width} = Dimensions.get('window')
	
	Accelerometer.setAccelerometerUpdateInterval(0.2);
	
	DeviceAngles.setDeviceMotionUpdateInterval(0.2);
	

	
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
	      gyro: false,
	      sound: false
	  	}
		}
	   
	  componentDidMount() {
	    DeviceEventEmitter.addListener('AccelerationData', function (data) {
	      this.setState({
	        x: data.acceleration.x.toFixed(3),
	        y: data.acceleration.y.toFixed(3),
	        z: data.acceleration.z.toFixed(3)
	      });
	    }.bind(this));
	    
	    DeviceEventEmitter.addListener('AnglesData', function (data) {
	      this.setState({
	        pitch: data.pitch.toFixed(2),
	        roll: data.roll.toFixed(2),
	        yaw: data.yaw.toFixed(2)
	      });
			}.bind(this))
			
			console.log(height)
	  }
	  
	  componentWillUnmount() {
	    Accelerometer.stopAccelerometerUpdates();
	    DeviceAngles.stopMotionUpdates();
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
	    DeviceAngles.stopMotionUpdates();
	    this.setState({
	      x: 0,
	      y: 0,
	      z: 0,
	      pitch: 0,
	      roll: 0,
	      yaw: 0,
	      gyro: false,
	      sound: false
	    });
	  }
	  
	  enableSound() {
		  console.log('true')
		  this.setState({
			  sound: !this.state.sound
			})
	  }
	  
	  
	  
	  render() {
	    //console.log(this.state);
	    return (
		    <View style={[S.container,{flexDirection:'column',paddingBottom:64}]}>
		    
			    <View style={{flex:2, flexDirection:'row'}}>
			     
			      <View style={{
			        flex: 2,
			      }}>
			      	<AccelBar accel={this.state.z}/>
			      </View>
			       <View style={S.debug}>
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
			        <Soundmaker accel={this.state.z}/>
			      </View>
			      
			      <View style={{flex: 3,justifyContent:'center' }}>
			      	<View style={S.bigFigureContainer}>
			      		<Text style={[S.bigFigure,{alignSelf:'center'}]}>2.3</Text>
			      	</View>
			      </View>		      
		      </View>
		    <View style={{flex:1, alignItems: 'center', justifyContent:'space-between',flexDirection:'row'}}>
		    		<View style={{flexDirection:'row'}}>
							<GeolocationManager/><Text style={{fontSize:20,color:'#aaaaaa',alignSelf:'flex-end',marginBottom:7,marginLeft:5}}>m</Text>
						</View>
						<TouchableHighlight onPress={this.enableSound.bind(this)} style={{borderRadius: 36}}>
							{ 
								(this.state.sound) ?
								<Image  style={{width: 72, height: 72}} source={require('../assets/sound-icon-off.png')}/> :
								<Image  style={{width: 72, height: 72}} source={require('../assets/sound-icon-on.png')}/>
							}
						</TouchableHighlight>
					</View>

				</View>


	    );
	  }
	};
	//	          source={require('image!sound-icon-off')}
