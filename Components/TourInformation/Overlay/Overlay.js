import {Dimensions, StyleSheet, View} from "react-native";
import Metrics from "./Metrics/Metrics";
import Tabs from "./Tabs/Tabs";
import React from "react";


const Overlay = () => {
    return (
        <View style={styles.front}>
            <View style={styles.content}>
                <View style={styles.top}>
                    <Metrics/>
                </View>
                <View style={styles.bottom}>
                    <Tabs/>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    content: {
        position:"absolute",
        flexDirection: "column",
        justifyContent: "space-between",
        height:Dimensions.get("screen").height,
    },
    top:{
        position:"absolute",
        width:Dimensions.get("screen").width,
        top:0,
    },
    bottom:{
        position:"absolute",
        width:Dimensions.get("screen").width,
        bottom:0,
    }
})


export default Overlay;
