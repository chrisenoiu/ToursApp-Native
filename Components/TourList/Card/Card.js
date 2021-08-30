import React from "react";
import {Dimensions, ScrollView, View, StyleSheet} from "react-native";
import Content from "./Content/CardContent";
import dataURL from "../../data.json"

// Function Component
const Card = () => {
    const data = dataURL.data;
    return data.map((data, key) => {
        return (
            <Content key={key} name={data.name} time={data.time} group={data.group} location={data.location}
                     background={{uri: data.background}}/>
        )
    })
}

export default Card;
