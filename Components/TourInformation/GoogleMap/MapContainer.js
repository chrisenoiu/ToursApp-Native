import * as React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View, Dimensions} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={region}/>
        </View>
    );
}

const region = {
    latitude: 45.429006386938994,
    longitude: 28.025429868769756,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
}

const styles = StyleSheet.create({
    container: {
        zIndex: 0,
        position: "relative",
    },
    map: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height / 100 * 70,
    },
});

