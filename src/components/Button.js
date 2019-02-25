import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
    const { buttonStyle, textStyle } = styles;


    return (
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle}>
                Click me!!!!
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1, // this means to expand to fill as much content as it possibly can
        alignSelf: 'stretch', // stretch to fill the limit of the container
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button;