import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import MapContainer from "../Components/TourInformation/GoogleMap/MapContainer";
import Overlay from "../Components/TourInformation/Overlay/Overlay";
import Metrics from "../Components/TourInformation/Overlay/Metrics/Metrics";

const TourInfo = () => {
    return (
        <View style={styles.container}>
            {/*Metrics*/}
            <View style={styles.front}>
                <Metrics/>
            </View>
            {/*Overlay*/}
            <View style={styles.middle}>
                <Overlay/>
            </View>
            {/*Map Container*/}
            <View style={styles.back}>
                <MapContainer/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
    },
    back: {
        flex: 1,
        zIndex: 0,
        top:0,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height/100*65,
        // backgroundColor:"blue",
    },
    middle: {
        zIndex: 1,
        bottom: 0,
        position: "absolute",
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height/100*35,
        // backgroundColor:"orange",
    },
    front: {
        top: 0,
        zIndex: 2,
        position: "absolute",
        width: Dimensions.get("screen").width,
        marginTop: Dimensions.get("screen").height/100*10,
        // backgroundColor:"red",
    },
})

export default TourInfo;
