import { View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from "./../../constants/Colors";
import { db } from '../../configs/FirebaseConfig'
import { collection, getDocs, query } from 'firebase/firestore';
import CategoryItem from './CategoryItem';
import { useRouter } from 'expo-router'

export default function Category() {
  const router = useRouter()
  
  const [categoryList,setCategoryList] = useState()

  useEffect(()=>{
    GetCategoryList()
  },[])

  const GetCategoryList = async ()=>{
    setCategoryList([])
    const q = query(collection(db,'Category'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc)=>{
      //console.log(doc.data())
      setCategoryList(prev=>[...prev,doc.data()])
    })
  }
 
  return (
    <>
    <View style={styleCat.container}>
      <Text style={styleCat.text}>Categories</Text>
    </View>
    <SafeAreaView style={styleCat.safeView}>
      <FlatList
        data = {categoryList}
        showsVerticalScrollIndicator={false}
        renderItem={({item,index})=>(
          <CategoryItem 
          category={item}
          key={index}
          onCategoryPress={(category)=>router.push('/productslist/'+category.name)}
          />
        )}
      />
    </SafeAreaView>
    </>
    
  )
}



const styleCat = StyleSheet.create({
  container: {
    paddingTop: '13%',
    paddingBottom: '1%',
    backgroundColor: Colors.primary,
  },
  text: {
    fontFamily: 'Outfit-Bold',
    fontSize: 24,
    padding: 15,
    textAlign: 'center',
    color: '#fff'
  },
  safeView: {
    // flex: 1,
    // flexDirection: 'column',
    maxHeight: '86%',
  },
});

    {/* <ScrollView style={styleCat.scrollView}>
      {categoryList.map((category) => {
          return (
            <CategoryItem
            key={category.name}
            category={category}
            onCategoryPress={(category)=>console.log(category)}
            />
          );
        })}
    </ScrollView> */}