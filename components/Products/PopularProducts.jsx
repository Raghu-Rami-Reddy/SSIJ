import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import PopularProdCard from './PopularProdCard'
import { useRouter } from 'expo-router'

export default function PopularProducts() {
    const router = useRouter()

    const [productsList, setProductsList] = useState()
    useEffect(()=>{
        GetProductsList()
    },[])
    const GetProductsList = async ()=>{
        setProductsList([])
        const q = query(collection(db,'Products'), limit(10))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc)=>{
            //console.log(doc.data().tag)
            if (doc.data().tag === 'Popular') {
                setProductsList(prev=>[...prev,doc.data()])
            } 
        })
    }
    return (
        <View>
            <View ><Text style={styleProd.text}>Popular Products</Text></View>
            <FlatList
                data={productsList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index})=>(
                    <PopularProdCard 
                        key={index}
                        products={item}
                        onProductPress={(products)=>router.push('/productdetailslist/'+products.name)}
                    />
                )} 
            />
        </View>
  )
}

const styleProd = StyleSheet.create({
    text: {
        fontFamily: "Outfit-Bold",
        fontSize: 17,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
    },
  
  });