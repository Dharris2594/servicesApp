import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const MyServices = (props) => (
    <View>
        <View style={{...styles.contenedor}}>
            <Text style={{fontSize: 40}}>My Services Page</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: "#4682B4",
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
