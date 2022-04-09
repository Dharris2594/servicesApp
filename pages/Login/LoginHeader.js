import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const LoginHeader = (props) => (
    <View>
        <View style={{...styles.contenedor}}>
            <Text style={{fontSize: 40}}>XOPA CHAMOOOO</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: "#4682B4",
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
