/**
 * Create some beeps
 *
*/
'use strict';

import React,  { Component } from 'react';
import {
  Text,
  View,
  NativeModules

} from 'react-native';
import S from '../styles';

import Sound from 'react-native-sound';

const tone440 = new Sound('tone440.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } else { // loaded successfully
    console.log('duration in seconds: ' + tone440.getDuration() +
      'number of channels: ' + tone440.getNumberOfChannels());
  }
});

export default class Soundmaker extends Component {
	constructor(props) {
		super(props);
		 this.state = {
		 	message: null
  	}
	}
   
  componentDidMount() {
	  
  }
  
  componentWillUnmount() {
  }
  
  handlePlay() {
		tone440.setVolume(1.0).play((success) => {
		  if (success) {
		    console.log('successfully finished playing');
		    this.setState({
			    message: 'success!'
		    })
		  } else {
		    console.log('playback failed due to audio decoding errors');
		    this.setState({
			    message: 'error'
		    })
		  }
		});
  }
  
  handleStop() {
  }
  
  render() {
    return (
	    	<View>
      	<Text onPress={this.handlePlay.bind(this)} style={S.button}>Play</Text>
      	<Text>State: {this.state.message}</Text>
      	</View>
    );
  }
};

