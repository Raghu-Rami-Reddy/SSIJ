import { StyleSheet, View, Image, Text, TextInput } from "react-native";
import React from "react";
import { Colors } from "./../../constants/Colors";
import { Feather } from '@expo/vector-icons';

const LogoImage = require("./../../assets/images/logo.png");
export default function Header() {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.image_text_Container}>
        <Image source={LogoImage} style={styles.image} />
        <View>
          <Text style={styles.text1}>Welcome to,</Text>
          <Text style={styles.text2}>Sri South India Jewellers</Text>
        </View>
      </View>
    </View>
    {/* search bar */}
    <View style={styles.search}>
        <Feather name="search" size={24} color="black" />
        <TextInput style={styles.place} placeholder="Search..."/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '12%',
    paddingBottom: '1%',
    backgroundColor: Colors.primary,
  },
  image_text_Container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 30,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 99,
  },
  text1: {
    color: "#fff",
    fontFamily: "Outfit-Regular",
  },
  text2: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    fontFamily: "Outfit-Medium",
  },
  search: {
    alignSelf: "center",
    width: "85%",
    flexDirection: "row",
    gap: 10,
    padding: 7,
    margin: 100,
    alignItems:"center",
    marginVertical: 10,
    borderStyle: 'solid',
    borderColor: Colors.primary,
    backgroundColor: Colors.secondary,
    borderWidth: 2,
    borderRadius: 50,
  },
  place: {
    width: '85%',
  },
});
