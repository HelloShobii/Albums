import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const BuyButton = ({ onPress }) => {
    const {BuyButtonTextStyle,BuyButtonStyle}=styles;

    return(
  <TouchableOpacity onPress={onPress} style={BuyButtonStyle}>
  <Text style={BuyButtonTextStyle}>
      Buy Now
  </Text>
  </TouchableOpacity>
    );
};

const styles={
    BuyButtonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#00004d',
        borderWidth:2,
        borderRadius:10,
        borderColor:'#00004d',
        marginLeft:0,
        marginRight:0
    },
    BuyButtonTextStyle:{
        alignSelf:'center',
        color:'#fff',
        fontSize:18,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    }
}

export default BuyButton;