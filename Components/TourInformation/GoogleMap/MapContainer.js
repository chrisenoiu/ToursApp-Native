import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        zIndex:0,
        position:"relative",
    },
    map: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
});
