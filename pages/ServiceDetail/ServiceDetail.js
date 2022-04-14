import React from 'react';
import { View, Text } from 'react-native';

export const ServiceDetail = ({route}) => {
    const { id } = route.params;
    return (
        <View>
            <Text style={{fontSize: 40}}>{id}</Text>
        </View>
    );
};
