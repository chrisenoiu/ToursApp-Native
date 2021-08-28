import React from 'react';
import ToursList from "./Screens/ToursList";
import TourInfo from "./Screens/TourInfo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TourInfo">
                <Stack.Screen name="ToursList" component={ToursList} />
                <Stack.Screen name="TourInfo" component={TourInfo} />
            </Stack.Navigator>
        </NavigationContainer>
  );
}

