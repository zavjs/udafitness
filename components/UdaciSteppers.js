import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default function UdaciSteppers ({ max, unit, value, onIncrement, onDecrement }) {
    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={onIncrement}>
                <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={onDecrement}>
                <Text>-</Text>
            </TouchableOpacity>
            <Text>UdaciSteppers {value} {unit}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'white',
        padding: 10
    }
})