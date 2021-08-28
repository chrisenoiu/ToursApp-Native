import React from "react";
import {GoogleMap, LoadScript} from "@react-google-maps/api";
import {Dimensions} from "react-native";

const MapContainer = () => {
    const MapStyles = {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        zIndex: 0,
        elevation: 0,
    };
    const DefaultLocation = {lat: 45.436640268450205, lng: 28.03560472277713};
    const APIKey = 'AIzaSyD4ljCDCFFOKVuxsnkbEjpPQz19L5HNfEQ';

    return (
        <LoadScript googleMapsApiKey={APIKey}>
            <GoogleMap mapContainerStyle={MapStyles} zoom={15} center={DefaultLocation} disableDefaultUI={true}
                       streetViewControl={false}/>
        </LoadScript>
    );
};

export default MapContainer;
