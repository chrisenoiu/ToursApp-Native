import React from "react";
import {Text, StyleSheet, View, Pressable} from "react-native";

// Icon Import
import Icon from 'react-native-vector-icons/Ionicons';

const MenuButton = () => {
    const menu = <Icon name="menu-outline" size={24} color="#000"/>;
    return (
        <View style={styles.button}>
            <Pressable onPress={() => MenuButton}>{menu}</Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 38,
        width: 38,
        borderRadius: 19,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        elevation: 5,
    }
})

export default MenuButton;
