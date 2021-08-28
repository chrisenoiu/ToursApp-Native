import React from "react";
import {View, StyleSheet} from "react-native";
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
    },
    content: {
        flexDirection: 'row',
        width:'90%',
        justifyContent: 'space-between'
    },
})

export default Navigation;
