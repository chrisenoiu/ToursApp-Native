import React from "react";
import {ImageBackground, View, StyleSheet, Dimensions} from "react-native";
import Card from "../Components/TourList/Card/Card";
import Header from "../Components/TourList/Header/Title/Header";
import Navigation from "../Components/TourList/Header/Navigation";
import {LinearGradient} from "expo-linear-gradient";

const background = {uri: "https://news.mit.edu/sites/default/files/images/202006/treasure-map.jpg"}
const title = "Descoperă Galațiul";

const ToursList = () => {
    return (
        <ImageBackground source={background} resizeMode="cover" style={styles.background}>
            <View style={styles.container}>
                <LinearGradient colors={["rgba(255,255,255,1)","transparent"]}>
                    <View style={styles.content}>
                        <Navigation/>
                        <Header text={title}/>
                        <Card/>
                    </View>
                </LinearGradient>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        height:Dimensions.get("screen").height
    },
    content: {
        marginTop: Dimensions.get("screen").height / 100 * 5,
    },
    background: {
        flex:1,
    }
})

export default ToursList;
