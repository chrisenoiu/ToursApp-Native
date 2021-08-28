import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const CustomButton = (props) => {
  const Navigation = useNavigation();
  return (
    <Pressable style={styles.background} onPress={() => Navigation.navigate(props.target)}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#F18805",
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
});

export default CustomButton;
