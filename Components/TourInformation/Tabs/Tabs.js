import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {Dimensions, Pressable, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";


//Imported Icons
import Icon from 'react-native-vector-icons/Ionicons';

const TimeIcon = <Icon name="time-outline" size={14} color="#D9BD97"/>;
const LocationIcon = <Icon name="location-outline" size={14} color="#D9BD97"/>;

//Imported Components
import Road from "./Fields/Road";
import Location from "./Fields/Location";


//Road Information
const importRoad = () => <Road title={titleRoad} text={textRoad}/>;
const titleRoad = "Mergem spre casa Auschitt";
const textRoad = "The house is located near the university, at 51 Royal Street. It was built by Lambrinidi Epaminonda, a Greek mill owner. He owned a machine shop to repair ships.";

//Location Information
const importLocation = () => <Location title={titleLocation} text={textLocation}/>;
const titleLocation = "Location Page Title";
const textLocation = "More information about the location coming soon.";

//Title Information
const Title = "Pe urmele domnesti...";
const Time = "8h";
const City = "Galati";

//Function Component
function Tabs() {
    const Tab = createMaterialTopTabNavigator();
    const Navigation = useNavigation();
    return (
        <View>
            {/*Head Section*/}
            <View style={styles.HeadContainer}>
                <Text style={styles.HeadTitle}>{Title}</Text>
                <View style={styles.HeadLabels}>
                    <View style={styles.HeadGroup}>
                        <Text>{TimeIcon}</Text>
                        <Text style={styles.HeadText}>{Time}</Text>
                    </View>
                    <View style={styles.HeadGroup}>
                        <Text>{LocationIcon}</Text>
                        <Text style={styles.HeadText}>{City}</Text>
                    </View>
                </View>
            </View>
            {/*Tab Section*/}
            <View style={styles.TabContainer}>
                <Tab.Navigator initialRouteName={"Traseul"} screenOptions={tabs}>
                    <Tab.Screen name="Traseul">{importRoad}</Tab.Screen>
                    <Tab.Screen name="Locatii">{importLocation}</Tab.Screen>
                </Tab.Navigator>
            </View>
            {/*Button Section*/}
            <View>
                <Pressable style={button.background} onPress={() => Navigation.navigate("ToursList")}>
                    <Text style={button.text}>Inapoi</Text>
                </Pressable>
            </View>
        </View>
    );
}

const tabs = {
    tabBarLabelStyle: {fontSize: 14, fontWeight: "600", color: "#A86611", textTransform: "none", letterSpacing: 0.5,},
    tabBarIndicatorStyle: {backgroundColor: "#A86611",},
};

const styles = StyleSheet.create({
    TabContainer: {
        height: Dimensions.get("window").height / 100 * 25,
    },
    HeadContainer: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#fff",
    },
    HeadTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 6,
        color: "#A86611",
        marginTop: 10,
        marginLeft: Dimensions.get("window").width / 100 * 5,
    },
    HeadLabels: {
        marginLeft: Dimensions.get("window").width / 100 * 5,
        flexDirection: "row",
    },
    HeadGroup: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
    },
    HeadText: {
        marginLeft: 2,
        fontSize: 14,
        color: "#D9BD97",
    },
})

const button = StyleSheet.create({
    background: {
        height: Dimensions.get("window").height / 100 * 6,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F18805",
        position:"relative",
        bottom:0,
    },
    text: {
        fontSize: 18,
        fontWeight: "600",
        color: "#fff",
    },
});

export default Tabs;
