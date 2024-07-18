import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import ProductsCard from '../../components/Products/ProductsCard'

export default function ProductsListByCategory() {

  const navigation = useNavigation()
  const {category} = useLocalSearchParams()
  const [productsList, setProductsList] = useState()
  const router = useRouter()

  useEffect(()=>{
    navigation.setOptions({
        headerShown: true,
        headerTitle: category,
        headerBackTitle: 'Categories',
    })
    getProductsList()
  },[])
  // to get products by category
  const getProductsList = async ()=>{
    setProductsList([])
    const q = query(collection(db, 'Products'),where('category','==',category))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc)=>{
      //console.log(doc.data())
      setProductsList(prev=>[...prev,doc.data()])

    })
  }

  return (
    <View style={styles.view}>
      <FlatList 
        data = {productsList}
        numColumns={2} 
        renderItem={({item})=>(
          <ProductsCard
            products= {item}
            onProductPress={(products)=>router.push('/productdetailslist/'+products.name)}
          />
        )}
        ItemSeparatorComponent={()=><View style={styles.seperator}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
  },
  seperator: {
    height: 10,
  },
})