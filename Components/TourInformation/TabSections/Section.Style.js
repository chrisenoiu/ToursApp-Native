import React from "react";
import {Dimensions, StyleSheet} from "react-native";

const SectionStyle = StyleSheet.create({
    content: {
        backgroundColor: "#fff",
    },
    title: {
        marginHorizontal:Dimensions.get("window").width/100*5,
        marginTop: 20,
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
        color: '#A86611',
    },
    view: {
        height: Dimensions.get("window").height/100*14,
    },
    text: {
        marginHorizontal:Dimensions.get("window").width/100*5,
        fontSize: 16,
        fontWeight: "400",
        color: '#D9BD97',
        lineHeight: 20,
    },
});

export default SectionStyle;
