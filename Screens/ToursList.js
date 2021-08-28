import React from "react";
import {ImageBackground, View, StyleSheet} from "react-native";
import Card from "../Components/TourList/Card/Card";
import Header from "../Components/TourList/Header/Title/Header";
import Navigation from "../Components/TourList/Header/Navigation";

const background = {uri: "https://news.mit.edu/sites/default/files/images/202006/treasure-map.jpg"}
const title = "Descoperă Galațiul";

// To-Do: Keyboard must be over content...
const ToursList = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                <Navigation/>
                <Header text={title}/>
                <Card/>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        flex: 1,
    },
})

export default ToursList;
