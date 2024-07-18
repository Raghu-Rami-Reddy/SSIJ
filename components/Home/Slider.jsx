import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../configs/FirebaseConfig'
import { query, collection, getDocs } from 'firebase/firestore'

export default function Slider() {
    const [sliderList, setSliderList] = useState([])
    useEffect(()=>{
        GetSliderList();
    },[])
    
    const GetSliderList = async ()=>{
        setSliderList([]);
        const q = query(collection(db, 'Slider'))
        const querySnapshot = await getDocs(q)

        querySnapshot.forEach((doc)=>{
            //console.log(doc.data().imageUrl)
            setSliderList(prev=>[...prev, doc.data()])
        })
    }
  return (
    <View>
      <Text style={styleSlider.text} >
        Latest Arrivals!
      </Text>
      <FlatList style={styleSlider.slide} 
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
          <Image source={{uri:item.imageUrl}} style={styleSlider.image}/>
        )}
      />
    </View>
  )
}

const styleSlider = StyleSheet.create({
  image: {
    width: 300,
    height: 150,
    borderRadius: 15,
    marginRight: 15,
  },
  text: {
    fontFamily: "Outfit-Bold",
    fontSize: 17,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
  },
  slide: {
    paddingLeft: 20,
  },
});
