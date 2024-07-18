import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import { Colors } from "./../../constants/Colors";


export default function CategoryItem({category, onCategoryPress}) {
  return (
      <TouchableOpacity onPress={()=>onCategoryPress(category)} style={styleCatList.cont}>
        <View style={styleCatList.view}><Text style={styleCatList.text1}>{category.name}</Text></View>
      </TouchableOpacity>
  ) 
}

const styleCatList = StyleSheet.create({
  cont: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
  },
  text1: {
    fontFamily: 'Outfit-Medium',
    color: Colors.primary,
  },
  view: {
    backgroundColor: '#fff',
    width: 300,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
  },
})