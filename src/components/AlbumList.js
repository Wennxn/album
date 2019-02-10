import React, { Component } from 'react';
import { View, Text} from 'react-native';




// functional component: function that returns some amount of JSX to be displayed (ex. Header)
// - mainly used for presentation needs on static data

// class based component: a class structure that extends a base class - Component
//                        used for dynamic sources of data 
//                        handels any data that might change (through fetching data, user events, etc)
//                        knows when it gets rendered to the device
//                        more code to write

// const AlbumList = () => {
    // return (
    //     <View>
    //         <Text>Album List!!!!!</Text>
    //     </View>
    // );
// };

class AlbumList extends Component {
    // life cycle method: they know when they will be rendered on the screen, and get notification about it
    // componentWillMount method will be executed soon as the AlbumList component about to be rendered to the screen
    componentWillMount() {
        console.log("component will mount in albumlist");
        // debugger; // this would allow the program to stop at this point and let us debug
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    // for class component, we define one method -> render
    // requirement for render method: it needs to return some amount of JSX
    render() {
        console.log("render will mount in albumlist");
        return (
            <View>  
                <Text>Album List!!!!!</Text>
            </View>
        );
    }
}

export default AlbumList;