import React, { Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import MainScreen from "./MainScreen";
import ScannerScreen from './ScannerScreen';
 
export default createBottomTabNavigator({
    QRCode: MainScreen,
    Scanner: ScannerScreen,
  });