// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// /*****************************************************/

// Index.ios.js - code for IOS only



// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header'
import AlbumList from "./src/components/AlbumList"
// react: know how a component shoud behave
        //knows how to take a bunch of component and make them work together
// react-native: knows how to take the output form a component and place it on the screen
               //provides default core component


// Create a component
// note: we create a new file for each component
// question: how does prop works? how does parent pass prob to the child?
const App = () => {
    return (
        // for ScrollView, we must add flex:1 to the root View 
        <View style={ {flex:1}} >
            <Header headerText={"Albums"}/> 
            <AlbumList /> 
        </View>
    );
}
//https://rallycoding.herokuapp.com/api/music_albums

// Render it to the device

AppRegistry.registerComponent('albums', () => App);