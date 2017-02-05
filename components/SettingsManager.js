	/**
	 * SettingsManager
	 *
	 */
	'use strict';
	
	import React,  { Component } from 'react';
	import {
	  Text,
	  View,
	  Image,
	} from 'react-native';
	import S from '../styles';

	
	
	export default class SettingsManager extends Component {
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
	  }
	  
	  componentWillUnmount() {
	  }
	  
	  
	  render() {
	    //console.log(this.state);
	    return (
		    <View style={[S.container,{flexDirection:'column'}]}>
		    
			    <View style={{flex:2, borderColor:'red',borderWidth:1,flexDirection:'row'}}>
			     
			      <View style={{
			        flex: 2,
			      }}>
			      </View>			      
			      <View style={{flex: 3,justifyContent:'center' }}>
			      	<View style={S.bigFigureContainer}>
			      		<Text style={[S.bigFigure,{alignSelf:'center'}]}>2.3</Text>
			      	</View>
			      </View>		      
		      </View>
				</View>


	    );
	  }
	};
	//	          source={require('image!sound-icon-off')}
