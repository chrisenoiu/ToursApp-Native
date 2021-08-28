import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";

// Icons
import Icon from "react-native-vector-icons/Ionicons";

const TimeIcon = <Icon name="time-outline" size={14} color="#fff"/>;
const DistanceIcon = <Icon name="location-outline" size={14} color="#A86611"/>;

const Metrics = () => {
    const Distance = "250";
    const Time = "27:34";

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.distance}>
                    <Text>{DistanceIcon}</Text>
                    <Text style={styles.textDistance}>{Distance} m departare</Text>
                </View>
                <View style={styles.time}>
                    <Text>{TimeIcon}</Text>
                    <Text style={styles.textTime}>{Time}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: Dimensions.get("window").width / 100 * 5,
    },
    content:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    time: {
        height: 24,
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
        height: 24,
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
        fontWeight: '100',
    },
    textTime: {
        color: "#fff",
        marginLeft: 4,
        lineHeight: 22,
    },
});

export default Metrics;
