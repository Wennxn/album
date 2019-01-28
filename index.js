// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// /*****************************************************/

// Index.ios.js - code for IOS only



// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header'
// react: know how a component shoud behave
        //knows how to take a bunch of component and make them work together
// react-native: knows how to take the output form a component and place it on the screen
               //provides default core component


// Create a component
// note: we create a new file for each component
const App = () => (
    <Header />
);


// Render it to the device

AppRegistry.registerComponent('albums', () => App);