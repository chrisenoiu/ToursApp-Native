import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Metrics = () => {
  const Distance = "250";
  const Time = "27:34";

  return (
    <View style={styles.content}>
      <View style={styles.distance}>
        <Text style={styles.textDistance}>{Distance}m departare</Text>
      </View>
      <View style={styles.time}>
        <Text style={styles.textTime}>{Time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  time: {
    flexDirection: "row",
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: "#A86611",
    alignItems: "center",
    color: "#fff",
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  distance: {
    flexDirection: "row",
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    color: "#A86611",
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  textDistance: {
    color: "#A86611",
    marginLeft: 4,
    lineHeight: 22,
  },
  textTime: {
    color: "#fff",
    marginLeft: 4,
    lineHeight: 22,
  },
});

export default Metrics;
