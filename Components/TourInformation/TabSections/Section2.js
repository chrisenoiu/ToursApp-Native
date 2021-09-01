import React from "react";
import {ScrollView, Text, View} from "react-native";
import SectionStyle from "./Section.Style";

const Section2 = (props) => {
    return (
        <View style={SectionStyle.content}>
            <Text style={SectionStyle.title}>{props.title}</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={SectionStyle.view}>
                <Text style={SectionStyle.text}>{props.text}</Text>
            </ScrollView>
        </View>
    )
}

export default Section2;
