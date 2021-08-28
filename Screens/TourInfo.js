import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import MapContainer from "../Components/TourInformation/GoogleMap/MapContainer";
import Metrics from "../Components/TourInformation/Metrics/Metrics";
import Tabs from "../Components/TourInformation/Tabs/Tabs";

const TourInfo = () => {
    return (
        <View style={styles.container}>
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
            <View style={styles.back}>
                <MapContainer/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    back: {
        zIndex: 0
    },
    front: {
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height,
        position: "absolute",
        zIndex: 1
    },
    content: {
        position:"absolute",
        flexDirection: "column",
        justifyContent: "space-between",
        height:Dimensions.get("window").height,
    },
    top:{
        position:"absolute",
        width:Dimensions.get("window").width,
        top:0,
    },
    bottom:{
        position:"absolute",
        width:Dimensions.get("window").width,
        bottom:0,
    }
})

export default TourInfo;
