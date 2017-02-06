	/**
	 * Accelerometer Bar Display
	 *
	 */
	'use strict';
	
	import React,  { Component } from 'react';
	import {
	  Text,
	  View,
	} from 'react-native';
	import S from '../styles';
	
	
	export default class AccelBar extends Component {
		constructor(props) {
			super(props);
		}
	   
	  componentDidMount() {
	  }
	  
	  componentWillUnmount() {

	  }
	  
	  handleStart() {

	  }
	  
	  handleStop() {

	  }
	  
	  
	  
	  render() {
		  const barHeight = 200 * (parseFloat(this.props.accel) + 0.9);
		  
	    return (
	      <View style={S.AccelBarContainer}>
					<View style={[S.AccelBar,{height:barHeight}]}></View>
	      </View>
	    );
	  }
	};
	