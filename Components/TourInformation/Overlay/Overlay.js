import {Dimensions, StyleSheet, View} from "react-native";
import Tabs from "./Tabs/Tabs";
import React from "react";


const Overlay = () => {
    return (
        <View style={styles.content}>
            <View style={styles.bottom}>
                <Tabs/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: "column",
        justifyContent: "space-between",
        height:Dimensions.get("screen").height/100*35,
    },
    bottom: {
        position: "absolute",
        width: Dimensions.get("screen").width,
        bottom: 0,
    }
})


export default Overlay;
