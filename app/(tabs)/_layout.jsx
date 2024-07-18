import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons , Feather , FontAwesome6 , MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors.ts'


export default function TabLayout() {
  return (
    
    <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor: Colors.primary, tabBarActiveBackgroundColor: Colors.secondary,}}> 
        <Tabs.Screen name="home" options={{
            tabBarLabel:'Home',
            tabBarIcon:({color})=> <Ionicons name="home" size={24} color={color} />
        }} />
        <Tabs.Screen name="categories" options={{
            tabBarLabel:'Categories',
            tabBarIcon:({color})=> <FontAwesome6 name="shapes" size={24} color={color} />
        }} />
        <Tabs.Screen name="myorders" options={{
            tabBarLabel:'My Orders',
            tabBarIcon:({color})=> <Ionicons name="cube" size={24} color={color} />
        }} />
        <Tabs.Screen name="cart" options={{
            tabBarLabel:'Cart',
            tabBarIcon:({color})=> <Feather name="shopping-cart" size={24} color={color} />
        }} />
        <Tabs.Screen name="account" options={{
            tabBarLabel:'Account',
            tabBarIcon:({color})=> <MaterialCommunityIcons name="account" size={32} color={color} />
        }} /> 
    </Tabs>
  )
}

