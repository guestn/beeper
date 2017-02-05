/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image,
  TouchableHighlight,
  StatusBar,
  Dimensions
} from 'react-native';
//import MotionManager from './components/Motion';
import GyroscopeManager from './components/GyroscopeManager';
import AccelerometerManager from './components/AccelerometerManager';
import MagnetometerManager from './components/Magnetometer';
import SettingsManager from './components/SettingsManager';
import S from './styles';

const {height, width} = Dimensions.get('window')


const routes = {
  accelerometer: {
    title: 'Live',
    component: AccelerometerManager
  },
  settings: {
    title: 'Settings',
    component: SettingsManager
  }
};

export class MotionManager extends Component {
  handleNavigationPress(route) {
    this.props.navigator.push(route);
  }
 
  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: 20,
				backgroundColor: '#222222',
				padding:20
      }}>
      	<Image style={{height:122, width:250, marginTop:40, marginBottom:40,alignSelf:'center'}} source={require('./assets/icon-basic-1080.png')}/>
        <TouchableHighlight style={[S.button, S.bigButton, {flexDirection:'row', justifyContent:'space-between'}]} onPress={this.handleNavigationPress.bind(this, routes.accelerometer)}>
        	<View style={{flex:1,flexDirection:'row', justifyContent:'space-between'}}>
        		<Text style={S.bigButtonText}>Go Live</Text>
        		<Image style={{width: 24, height: 24,}} source={require('./assets/livestream-icon-48.png')}/>
					</View>
				</TouchableHighlight>
        <TouchableHighlight style={[S.button, S.bigButton, {flexDirection:'row', justifyContent:'space-between'}]} onPress={this.handleNavigationPress.bind(this, routes.settings)}>
          <View style={{flex:1,flexDirection:'row', justifyContent:'space-between'}}>
        		<Text style={S.bigButtonText}>Settings</Text>
						<Image style={{width: 24, height: 24,}} source={require('./assets/gear-icon-48.png')}/>
        	</View>
				</TouchableHighlight>
      </View>
    );
  }
};

routes.motion = {
  title: 'Beeper',
  component: MotionManager
};

export class App extends Component {
  render() {
    return (
	    <View style={{flex:1}}>
	      <StatusBar
					barStyle="light-content"
				/>
	      <NavigatorIOS
	        style={{
	          flex: 1,
	        }}
	        initialRoute={routes.motion}
	        tintColor='#aaa'
	        barTintColor='#111'
	        backGroundColor='#111'
	        titleTextColor='#36DBA8'
	        translucent={false}
	      />
      </View>
    );
  }
};

AppRegistry.registerComponent('beeper', () => App)