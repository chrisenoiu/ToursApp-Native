import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = "Pe urmele domnesti...";
const Time = "8h";
const Location = "Galati";

const Header = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{Title}</Text>
      <View style={styles.labels}>
        <View style={styles.group}>
          <Text style={styles.text}>{Time}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.text}>{Location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#fff",
  },
  labels: {
    marginLeft: 20,
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
    color: "#A86611",
    marginTop: 10,
    marginLeft: 20,
  },
  group: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  text: {
    marginLeft: 2,
    fontSize: 14,
    color: "#D9BD97",
  },
});

export default Header;
