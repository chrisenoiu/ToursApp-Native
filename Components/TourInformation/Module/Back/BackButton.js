import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

// Back Button Function
const BackButton = () => {
  const Navigation = useNavigation();
  return (
    <View style={button.container}>
      <Pressable style={button.background} onPress={() => Navigation.navigate("ToursList")}>
        <Text style={button.text}>Inapoi</Text>
      </Pressable>
    </View>
  );
};

//Styling Back Button
const button = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
  },
  background: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F18805",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default BackButton;
