import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const Header = ({style, text}) => (
    <View>
        <View style={{...styles.contenedor, ...style}}>
            <Text style={{fontSize: 40}}>{text}</Text>
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
