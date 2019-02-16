import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';




// functional component: function that returns some amount of JSX to be displayed (ex. Header)
// - mainly used for presentation needs on static data

// class based component: a class structure that extends a base class - Component
//                        used for dynamic sources of data 
//                        handels any data that might change (through fetching data, user events, etc)
//                        knows when it gets rendered to the device
//                        more code to write

// difference between state and props: state is for component's internal record keeping, props is for parent passing data to child

// const AlbumList = () => {
    // return (
    //     <View>
    //         <Text>Album List!!!!!</Text>
    //     </View>
    // );
// };

class AlbumList extends Component {
    // declear intial empty state (i.e empty list of albums)
    state = { albums: [] };
    

    // life cycle method: they know when they will be rendered on the screen, and get notification about it
    // componentWillMount method will be executed soon as the AlbumList component about to be rendered to the screen
    componentWillMount() {
        console.log("component will mount in albumlist");
        // debugger; // this would allow the program to stop at this point and let us debug
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((data) => this.setState({ albums: data }));
    }

    // helper function
    renderAlbums() {
        return this.state.albums.map(album => 
            //<Text key={album.title}>{album.title}</Text>); // the purpose of key is to make sure every element is unique so it's fast for virtual DOM to update to actual DOM
            < AlbumDetail key={album.title} album={album} />);
    }

    // for class component, we define one method -> render
    // requirement for render method: it needs to return some amount of JSX
    render() {
        // render method runs twice!!! because state was updated from setState()
        console.log(this.state);
        return (
            <View>  
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;