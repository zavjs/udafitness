import React from 'react';
import { View, Text, Slider } from 'react-native';

export default function UdaciSlider ({ max, unit, step, value, onChange }) {
    return (
        <View>
            <Text>UdaciSlider: {value}</Text>
            <Slider 
                minimumValue={0}
                maximumValue={max}
                step={step}
                value={value}
                onValueChange={onChange} />
            
            <View>
                <Text>{value} {unit}</Text>
            </View>
        </View>
    );
}