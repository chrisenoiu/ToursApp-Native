import React from "react";
import {TextInput, StyleSheet, Dimensions} from "react-native";


const SearchBar = () => {
    return (
        <TextInput style={styles.input} placeholder={'Cauta un tur'}/>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 38,
        width: (Dimensions.get("window").width) / 100 * 75,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#fff",
        borderColor: "#fff",
        borderRadius: 20,
        shadowColor: "#000",
        elevation: 5,
    },
})
export default SearchBar;
