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
	    //console.log(this.state);
	    return (
	      <View style={S.AccelBarContainer}>
					<View style={S.AccelBar}></View>
	      </View>
	    );
	  }
	};
	