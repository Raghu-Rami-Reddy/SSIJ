import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../configs/FirebaseConfig'
import { query, collection, where, getDocs } from 'firebase/firestore'
import { Ionicons } from '@expo/vector-icons';


const bg_image = require('./../../assets/images/red.gif')
export default function ProductDetails({product}) {
  const [productDetails,setProductDetails] = useState()
  
  useEffect(()=>{
    getProductDetails()
  },[])

  const getProductDetails = async()=>{
    setProductDetails([])
    const q = query(collection(db, 'Products'),where('name','==',product))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc)=>{
      //console.log(doc.data())
      setProductDetails(prev=>[...prev,doc.data()])
    })
  }

  return (
    <SafeAreaView style={styleProdInfo.safeview}>
        <FlatList
          data={productDetails}
          showsVerticalScrollIndicator={false}
          renderItem={({item})=>(
            <>
            <View style={styleProdInfo.viewimage}>
              <Image source={{uri:item.imageUrl}} style={styleProdInfo.image}/>
            </View>
            <View style={styleProdInfo.viewtext}>
              <Text style={styleProdInfo.text1}>{item.name}</Text>
              <Text style={styleProdInfo.text2}>{item.description}</Text>
              <View style={styleProdInfo.weightcart}>
                <Text style={styleProdInfo.text3}>{item.weight}</Text>
                <TouchableOpacity style={styleProdInfo.cart}>
                  <Text style={styleProdInfo.textcart}>Add to cart</Text>
                  <Ionicons name="cart-outline" size={32} color='#B87A30' />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styleProdInfo.viewtextbg}>
              <Image style={styleProdInfo.bg} source={bg_image}/>
              <Text style={styleProdInfo.text4}>{item.offer}</Text>
            </View>

            </>
          )}
        />
        
    </SafeAreaView>
  )
}

const styleProdInfo = StyleSheet.create({
  safeview: {
    flex: 1,
    flexDirection: 'column',
  },
  viewimage: {
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#fff',
  },
  viewtext: {
    flex: 1,
    flexDirection:'column',
    marginLeft: 12,
    marginRight: 12,
    padding: 10,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    
  },
  image: {
    width:'100%',
    height:400,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  text1: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
  },
  text2: {
    textAlign: 'justify',
    fontSize: 16,
    fontFamily: 'Outfit',
    marginBottom: 5,
  },
  weightcart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  text3: {
    fontSize: 20,
    fontFamily: 'Outfit-Medium',
    color: '#808080',
    alignItems: 'center',
  },
  viewtextbg: {
    alignSelf: 'center',
  },
  text4: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
    position: 'absolute',
  },
  bg: {
    width: 270,
    maxHeight: 25,
    borderRadius: 10,
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3E7D7',
    padding: 7,
    borderRadius: 20,
  },
  textcart: {
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
    color: '#B87A30',
  },
})