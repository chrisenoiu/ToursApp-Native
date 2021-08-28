import React from 'react';
import ToursList from "./Screens/ToursList";
import TourInfo from "./Screens/TourInfo";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Dimensions, SafeAreaView, StyleSheet} from "react-native";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <SafeAreaView style={styles.view}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="TourInfo" screenOptions={{headerShown:false}}>
                    <Stack.Screen name="ToursList" component={ToursList}/>
                    <Stack.Screen name="TourInfo" component={TourInfo}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view:{
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    }
})
