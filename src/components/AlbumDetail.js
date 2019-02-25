import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({album}) => {
    // destructure album and style
    const { title, artist, thumbnail_image, image } = album;
    const { headerContentStyle, imageStyle, imageContainerStyle, headerTextStyle, albumImageStyle } = styles;

    return(
        <Card>
            <CardSection>
                <View style={imageContainerStyle}>
                    <Image 
                        style={imageStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    style={albumImageStyle}
                    source={{uri: image}}
                />
            </CardSection>
            
            <CardSection>
                <Button/>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 50,
        width: 50,
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItem: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail;