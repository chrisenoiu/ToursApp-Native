import React from "react";
import {ScrollView, Text, View} from "react-native";
import FieldStyles from "./Field.Style";

const Location = (props) => {
    return (
        <View style={FieldStyles.content}>
            <Text style={FieldStyles.title}>{props.title}</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={FieldStyles.view}>
                <Text style={FieldStyles.text}>{props.text}</Text>
            </ScrollView>
        </View>
    )
}

export default Location;
