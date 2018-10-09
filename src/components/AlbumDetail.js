import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
import BuyButton  from './BuyButton'

const AlbumDetail = ({album}) => {
    const {title,artist,thumbnail_image,image,url}=album;
    const {
        ThumbnailStyle,HeaderContentStyle,HeaderTextStyle,ThumbnailLayoutStyle,ImageStyle
    }=styles;
    return(
    <Card>
        <CardSection>
            <View style={ThumbnailLayoutStyle}>
            <Image
            style={ThumbnailStyle}
            source={{ uri:thumbnail_image}}
            />
            </View>
            <View style={HeaderContentStyle}>
        <Text style={HeaderTextStyle}>{title}</Text>
        <Text>{artist}</Text>
            </View>
        </CardSection>

        <CardSection>
            <Image style={ImageStyle}
            source={{uri:image}}
            />
        </CardSection>

        <CardSection>
         <BuyButton onPress={() => Linking.openURL(url)}/>
        </CardSection>
    </Card>
    );
};

const styles={
    HeaderContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },

    HeaderTextStyle:{
      fontSize:18
    },
    ThumbnailStyle:{
        height:50,
        width:50
    },
    ThumbnailLayoutStyle:{
        justifyContent:'center',
        alignContent:'center',
        marginLeft:10,
        marginRight:10
    },
    ImageStyle:{
        height:300,
        flex:1,
        width:null
    }
}


export default AlbumDetail;