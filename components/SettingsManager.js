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
	  Slider
	} from 'react-native';
	import S from '../styles';
	
	export default class SettingsManager extends Component {
		constructor(props) {
			super(props);
			this.state = {
				sensitivity: 5,
				soundLevel: 80
		  }
		}
	   
	  componentDidMount() {
		  this.setState({
				sensitivity: 5,
				soundLevel: 80	  
		  })
	  }
	  
	  componentWillUnmount() {
	  }
	  
	  
	  render() {
	    //console.log(this.state);
	    return (
		    <View style={[S.container,{flexDirection:'column',paddingBottom:64}]}>
		    		
			    	<View style={S.settingsRow}>
			    		<Text style={[S.smallText,{}]}>Sensitivity</Text>
			    		<View style={{flex:1,flexDirection:'row'}}>
					      <View style={{
					        flex: 2,
					      }}>
					      	<Slider style={S.slider}
					      		minimumTrackTintColor='#36DBA8'
										minimumValue={1}
										maximumValue={10}
										{...this.props}
										value = {this.state.sensitivity}
										onValueChange={(value) => this.setState({sensitivity: value})} />
					      </View>			      
					      <View style={{flex: 1,justifyContent:'center' }}>
					      	<Text style={[S.mediumText, {textAlign: 'right'}]}>{Math.floor(this.state.sensitivity)}</Text>
					      </View>
				      </View>
				    </View>      

			    	<View style={S.settingsRow}>
			    		<Text style={[S.smallText]}>Default Sound Level</Text>
			    		<View style={{flex:1,flexDirection:'row'}}>

					      <View style={{
					        flex: 2,
					      }}>
					      	<Slider style={S.slider}
					      		minimumTrackTintColor='#36DBA8'
										minimumValue={0}
										maximumValue={100}
										{...this.props}
										value = {this.state.soundLevel}
										onValueChange={(value) => this.setState({soundLevel: value})} />
					      </View>			      
					      <View style={{flex: 1,justifyContent:'center' }}>
					      	<Text style={[S.mediumText, {textAlign: 'right'}]}>{Math.floor(this.state.soundLevel)}</Text>
					      </View>
					    </View>
				    </View>      

				</View>


	    );
	  }
	};
	//	          source={require('image!sound-icon-off')}
