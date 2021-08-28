import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import Menu from "./Navigation/MenuButton";
import SearchBar from "./Navigation/SearchBar";

const Navigation = () => {
    return (
        <View style={navigation.container}>
            <View style={navigation.content}>
                <Menu/><SearchBar/>
            </View>
        </View>
    )
}

const navigation = StyleSheet.create({
    container:{
        flexDirection: 'column',
        alignItems:'center',
        marginVertical: 20,
    },
    content: {
        width: Dimensions.get("window").width/100*90,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default Navigation;
