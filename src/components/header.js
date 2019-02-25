// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
// view tag is used to position/style elements(ex. text) in reactnative

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// flexbox: used on positioning of elements in a container (ex. view)
    // in our case, how to place the text tag to the overall view tag
    // properties: 'flex-start','center,'flex-end','space-between','space-around'
    // justifyContent: vertical position (top to bottom)
    // alignItems: horizontal position (left to right)
    // flexDirection: 'column', 'row' 

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60, // pixel value
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}

// Make the component available to other parts of the app
export default Header;

