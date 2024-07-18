import { ScrollView, View } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from './../../components/Home/Slider'
import PopularProducts from '../../components/Products/PopularProducts'


export default function home() {
  return (
    <>
    <View>
      {/* Header */}
        <Header />
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* New Arrivals Slider*/}
        <Slider />
      {/* Popular Products */}
        <PopularProducts />
    <View style={{height:'5%'}}>
    </View>
    </ScrollView>
    </> 
  )
}