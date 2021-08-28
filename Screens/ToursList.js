import React from "react";
import { View } from "react-native";
import Card from "../Components/TourList/Card/Card";
import Header from "../Components/TourList/Header/Title/Header";
import Navigation from "../Components/TourList/Header/Navigation";

const ToursList = () => {
  return (
    <View>
      <Navigation/>
      <Header text={"Descopera Galatiul"}/>
      <Card/>
    </View>
  );
};

export default ToursList;
