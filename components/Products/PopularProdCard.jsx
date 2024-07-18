import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const bg_image = require('./../../assets/images/red.gif')
export default function PopularProdCard({products , onProductPress}) {
  return (
    <TouchableOpacity onPress={()=>onProductPress(products)}>
    <View style={styleProCard.view}>
        <View style={styleProCard.text1View}>
            <Text style={styleProCard.text1}>{products.category}</Text>
        </View>
        <Image 
            source={{uri:products?.imageUrl}}
            style={styleProCard.image}
        />
        <View style={styleProCard.text2View}>
          <Text style={styleProCard.text3} numberOfLines={1}>{products.name}</Text>
          <Text style={styleProCard.text2}>{products.weight}</Text>
        </View>
        <View style={styleProCard.textView}>
          <Image style={styleProCard.bg} source={bg_image}/>
          <Text style={styleProCard.text4}>{products.offer}</Text>
        </View>
    </View>
    </TouchableOpacity>
  )
}

const styleProCard = StyleSheet.create({
    view: {
      flexDirection: 'column',
      marginLeft: 25,
      padding: 10,
      backgroundColor: Colors.secondary,
      borderRadius: 15,
    },
    image: {
      width: 250,
      height: 160,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
    },
    text2View: {
      marginTop: 7,
      maxWidth: 250,
    },
    text3: {
      fontFamily: 'Outfit-Bold',
      fontSize: 17,
    },
    text2: {
      fontFamily: 'Outfit-medium',
      fontSize: 14,
      color: '#808080',
    },
    text1: {
      color: '#fff',
      fontFamily: 'Outfit-Bold',
      fontSize: 17,
      textAlign: 'center',
    },
    text1View: {
      backgroundColor: Colors.primary,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    text4: {
      fontFamily: 'Outfit-Bold',
      fontSize: 17,
      position: 'absolute',
      color: '#fff'
    },
    bg: {
      flex: 1,
      width: 235,
      maxHeight: 20,
      borderRadius: 15,
    },
    textView: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginTop: 2,
    },
})