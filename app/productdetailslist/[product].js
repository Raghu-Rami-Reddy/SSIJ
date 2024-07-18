import { View, Text} from 'react-native'
import React, { useEffect} from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'

import ProductDetails from '../../components/Products/ProductDetails'

export default function ProductDetailsByProduct() {
  const navigation = useNavigation()
  const {product} = useLocalSearchParams()

  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTitle: product,
      headerBackTitleVisible: false,
    })
  },[])

  return (
    <ProductDetails product={product}/>
  )
}