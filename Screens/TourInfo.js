import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import MapContainer from "../Components/TourInformation/GoogleMap/MapContainer";
import InfoTabs from "../Components/TourInformation/InfoTabs";
import Metrics from "../Components/TourInformation/Metrics/Metrics";

const TourInfo = () => {
    return (
        <View style={styles.container}>
            {/*Metrics*/}
            <View style={styles.front}>
                <Metrics/>
            </View>
            {/*Overlay*/}
            <View style={styles.middle}>
                <InfoTabs/>
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
        top:0,
        flex: 1,
        zIndex: 0,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height/100*65,
    },
    middle: {
        bottom: 0,
        zIndex: 1,
        position: "absolute",
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height/100*35,
    },
    front: {
        top: 0,
        zIndex: 2,
        position: "absolute",
        width: Dimensions.get("screen").width,
        marginTop: Dimensions.get("screen").height/100*10,
    },
})

export default TourInfo;
