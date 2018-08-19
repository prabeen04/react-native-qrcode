import React, { Component } from 'react'
import { createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { View, Text } from 'react-native'
import MainScreen from "./MainScreen";
import ScannerScreen from './ScannerScreen';

class HomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        // drawerIcon: ({ tintColor }) => (
        //   <Image
        //     source={require('./chats-icon.png')}
        //     style={[styles.icon, {tintColor: tintColor}]}
        //   />
        // ),
      };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}
export default createDrawerNavigator({
    Home: {
      screen: HomeScreen,
    },
    Setting: {
      screen: SettingsScreen,
    },
  });