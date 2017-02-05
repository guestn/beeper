	/**
	 * GeolocationManager
	 *
	 */
	'use strict';
	
	import React,  { Component } from 'react';
	import {
	  Text,
	  View,
	} from 'react-native';
	import S from '../styles';

	

  const watchID: ?number = null;

	
	export default class GeolocationManager extends Component {
		constructor(props) {
			super(props);
			 this.state = {
		   	altitude: 0
	  	}
		}
	   
	  componentDidMount() {
	    navigator.geolocation.getCurrentPosition(
	      (position) => {
	        const altitude = Math.floor(position.coords.altitude);
	        console.log(altitude)
	        this.setState({altitude});
	      },
	      (error) => alert(JSON.stringify(error)),
	      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
	    );
			this.watchID = navigator.geolocation.watchPosition((position) => {
      	var lastPosition = JSON.stringify(position);
				this.setState({lastPosition});
    	});
	  }
	  
	  componentWillUnmount() {
	  }
	  
		  
	  render() {
	    return (
		    <Text style={[S.mediumFigure,{width:130,textAlign:'right'}]}>
		     {this.state.altitude}</Text>
	    );
	  }
	};
