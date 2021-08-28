import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import MapContainer from "../Components/TourInformation/GoogleMap/MapContainer";
import Overlay from "../Components/TourInformation/Overlay/Overlay";

const TourInfo = () => {
    return (
        <View style={styles.container}>
            {/*Overlay*/}
            <View style={styles.front}>
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
    },
    front: {
        flex: 1,
        zIndex: 1,
        elevation: 1,
        position: "absolute",
    },
})

export default TourInfo;
