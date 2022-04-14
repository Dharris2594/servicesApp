import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';

export const ServiceDetail = ({navigation, route}) => {

    useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: route.params.title});
      }, [navigation, route]);


    const { id } = route.params;
    return (
        <View>
            <Text style={{fontSize: 40}}>{id}</Text>
        </View>
    );
};
