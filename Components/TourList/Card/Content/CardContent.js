import React from "react";
import CustomButton from "../../Button/CustomButton";
import {LinearGradient} from "expo-linear-gradient";
import {Text, View, ImageBackground, StyleSheet, Dimensions} from "react-native";

// Icon Import
import Icon from 'react-native-vector-icons/Ionicons';
const Time = <Icon name="time-outline" size={12} color="#fff"/>;
const User = <Icon name="person-outline" size={12} color="#fff"/>;
const Location = <Icon name="location-outline" size={12} color="#fff"/>;

// I've set props for "name", "time", "group", "location" in Card.js;
const Content = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={props.background} style={styles.image}>
                <LinearGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
                    <View style={styles.content}>
                        <View style={styles.upper}>
                            <Text style={styles.title}>{props.name}</Text>
                        </View>
                        <View style={styles.lower}>
                            <View style={styles.labels}>
                                <View style={styles.group}>
                                    <Text style={styles.text}>{Time} {props.time}</Text>
                                </View>
                                <View style={styles.group}>
                                    <Text style={styles.text}>{User} {props.group}</Text>
                                </View>
                                <View style={styles.group}>
                                    <Text style={styles.text}>{Location} {props.location}</Text>
                                </View>
                            </View>
                            <View style={styles.button}>
                                <CustomButton target={"TourInfo"} text={"Incepe Aici"}/>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width/100*90,
        flexDirection: "column",
        marginBottom: 10,
    },
    content: {
        flexDirection: "column",
        justifyContent: "space-between",
        height: Dimensions.get("window").height/100*15,
    },
    image: {
        resizeMode: "cover",
        alignSelf: "flex-end",
        justifyContent: "center",
        width: "100%",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        overflow: "hidden",
    },
    upper: {
        fontWeight: "400",
        marginTop: 10,
        marginLeft: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "400",
        color: "#fff",
    },
    lower: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 12,
        marginBottom: 5,
    },
    labels: {
        flexDirection: "row",
        color: "#fff",
    },
    info: {
        marginRight: 5,
        flexDirection: "row",
    },
    group: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 8,
    },
    text: {
        marginLeft: 2,
        color: "#fff",
    },
    icon: {
        color: "#fff",
    },
    button: {
        marginBottom: 10,
    },
});

export default Content;
