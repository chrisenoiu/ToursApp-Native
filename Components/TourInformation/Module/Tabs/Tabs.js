import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, View, Dimensions } from "react-native";
import BackButton from "../Back/BackButton";

//Imported Components
import Road from "./Fields/Road";
import Location from "./Fields/Location";
import Header from "./Header/Header";

//Road Information
const importRoad = () => <Road title={titleRoad} text={textRoad} />;
const titleRoad = "Mergem spre casa Auschitt";
const textRoad = "The house is located near the university, at 51 Royal Street. It was built by Lambrinidi Epaminonda, a Greek mill owner. He owned a machine shop to repair ships.";

//Location Information
const importLocation = () => <Location title={titleLocation} text={textLocation} />;
const titleLocation = "Location Page Title";
const textLocation = "More information about the location coming soon.";

//Function Component
export default function TabNavigator() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Tab.Navigator initialRouteName={"Traseul"}>
          <Tab.Screen name="Traseul">{importRoad}</Tab.Screen>
          <Tab.Screen name="Locatii">{importLocation}</Tab.Screen>
        </Tab.Navigator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {},
  content: {},
  button: {},
});

// screenOptions={Tabs}
// const Tabs = {
//   tabBarLabelStyle: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#A86611",
//     textTransform: "none",
//     letterSpacing: 0.5,
//   },
//   tabBarIndicatorStyle: {
//     backgroundColor: "#A86611",
//   },
// };
