import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'


export default function ProductsCard({products , onProductPress}) {
    return (
        <TouchableOpacity onPress={()=>onProductPress(products)}>
            <View style={styleProductCard.view}>
                <Image 
                    source={{uri:products?.imageUrl}}
                    style={styleProductCard.image}
                />
                <View>
                    <Text style={styleProductCard.text1} numberOfLines={1}>{products.name}</Text>
                    <Text style={styleProductCard.text2} numberOfLines={1}>{products.description}</Text>
                    <Text style={styleProductCard.text3}>{products.weight}</Text>
                </View>
            </View>

        </TouchableOpacity>

    )
}

const styleProductCard = StyleSheet.create({
    view: {
        flexDirection: 'column',
        margin: 12,
        padding: 10,
        backgroundColor: Colors.secondary,
        borderRadius: 15,
    },
    image: {
        width: 170,
        height: 180,
        borderRadius: 10,
    
    },
    text1: {
        marginTop: 5,
        fontFamily: 'Outfit-Bold',
        fontSize: 12,
        maxWidth: 170,
    },
    text2: {
        fontFamily: 'Outfit',
        fontSize: 12,
        maxWidth: 170,
    },
    text3: {
        fontFamily: 'Outfit',
        fontSize: 12,
        color: '#808080',
    },

})