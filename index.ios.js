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
  TouchableHighlight
} from 'react-native';
//import MotionManager from './components/Motion';
import GyroscopeManager from './components/GyroscopeManager';
import AccelerometerManager from './components/AccelerometerManager';
import MagnetometerManager from './components/Magnetometer';
import S from './styles';

const routes = {
  gyroscope: {
    title: 'Gyroscope',
    component: GyroscopeManager
  },
  accelerometer: {
    title: 'Live',
    component: AccelerometerManager
  },
  magnetometer: {
    title: 'Magnetometer',
    component: MagnetometerManager
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
        paddingTop: 100,
				backgroundColor: '#222222',
				padding:20
      }}>
        <TouchableHighlight style={[S.button, S.bigButton, {flexDirection:'row', justifyContent:'space-between'}]} onPress={this.handleNavigationPress.bind(this, routes.accelerometer)}>
        	<View style={{flex:1,flexDirection:'row', justifyContent:'space-between'}}>
        		<Text style={S.bigButtonText}>Go Live</Text>
        		<Image style={{width: 24, height: 24,}} source={require('./assets/livestream-icon-48.png')}/>
					</View>
				</TouchableHighlight>
        <TouchableHighlight style={[S.button, S.bigButton, {flexDirection:'row', justifyContent:'space-between'}]} onPress={this.handleNavigationPress.bind(this, routes.gyroscope)}>
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
      <NavigatorIOS
        style={{
          flex: 1,
        }}
        initialRoute={routes.motion}
        tintColor='white'
        barTintColor='#000'
        backGroundColor='#000'
        titleTextColor='#36DBA8'
        translucent={false}
        
         />
    );
  }
};

AppRegistry.registerComponent('beeper', () => App);