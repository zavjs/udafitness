import React from 'react';
import { View, Text, Slider } from 'react-native';

export default function UdaciSlider ({ max, unit, step, value, onChange }) {
    return (
        <View>
            <Text>UdaciSlider: {value}</Text>
            <Slider 
                minimumValue={-10}
                maximumValue={10}
                step={2.5}
                value={value}
                onValueChange={onChange} />
        </View>
    );
}