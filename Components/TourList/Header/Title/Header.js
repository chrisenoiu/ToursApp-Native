import React from "react";
import { StyleSheet, Text } from "react-native";

const Header = (props) => {
  return (
    <Text style={styles.title}>{props.text}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 22,
    fontWeight: "700",
    color: "#0E1428",
  },
});

export default Header;
