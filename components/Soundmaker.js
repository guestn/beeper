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

/*
const tone440 = new Sound('tone440.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } else { // loaded successfully
    console.log('duration in seconds: ' + tone440.getDuration() +
      'number of channels: ' + tone440.getNumberOfChannels());
  }
});
*/

const soundArray = [];
const intervalListener = null;

for (const i=1; i<=13;i ++) {
	soundArray[i] = new Sound('tone'+i+'.wav', Sound.MAIN_BUNDLE);
}

export default class Soundmaker extends Component {
	constructor(props) {
		super(props);
		 this.state = {
		 	message: null,
  	}
  	console.log(props)
  	this.handlePlay = this.handlePlay.bind(this)
	}
   
  componentDidMount() {
	  this.createBeepChain()
  }
  
  componentWillUnmount() {
	  this.handleStop();
  }
  
  handlePlay() {
/*
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
		
*/
		let tonePitch = 20 * (parseFloat(this.props.accel) + 0.9);

		tonePitch = Math.floor(tonePitch);
			console.log(tonePitch)
		if (tonePitch <= 13 && tonePitch >= 1) {
			console.log('normal')
			soundArray[tonePitch].play();
		} else if (tonePitch > 12){
			console.log('hi')
			soundArray[13].play();
		} else {
			console.log('lo')
			soundArray[1].play();
		}
  }
  
  createBeepChain() {

	  intervalListener = setInterval(
	  
		  () => {
			  if (this.props.accel >= -0.9 && this.props.accel != 0) {
				  this.handlePlay();
				  this.setState({
					  message: 'YES'
				  })
			  } else {
				  this.setState({
					  message: 'NO'
				  })
			  }
		  }, 200);
		  
  }
  
  handleStop() {
	  clearInterval(intervalListener)
  }
  
  render() {
    return (
	    	<View>
	    		<View>
      		<Text onPress={this.createBeepChain.bind(this)} style={S.button}>Play</Text>
      		</View>
      		<Text onPress={this.handleStop.bind(this)} style={S.button}>Stop</Text>

					<Text>Msg: {this.state.message}</Text>
					<Text>Accel: {this.props.accel	}</Text>
					<Text onPress={this.handlePlay.bind(this)} style={S.button}>TESTBEEP</Text>


      	</View>
    );
  }
};

