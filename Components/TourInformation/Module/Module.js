import React from "react";
import { StyleSheet, View } from "react-native";
import TabNavigator from "./Tabs/Tabs";
import Metrics from "./Metrics/Metrics";
import Header from "./Tabs/Header/Header";
import BackButton from "./Back/BackButton";

const Module = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {/*<Metrics style={styles.metrics} />*/}
      </View>
      <View style={styles.bottom}>
        {/*<Header style={styles.header} />*/}
        <TabNavigator style={styles.tabs} />
        {/*<BackButton style={styles.button} />*/}
      </View>
    </View>
  )
    ;
};

const styles = StyleSheet.create({
  container: {},
  top: {},
  bottom: {},
  metrics: {},
  header: {},
  tabs: {},
  button: {},
});

export default Module;
