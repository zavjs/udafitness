import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default function UdaciSteppers ({ max, unit, value, onIncrement, onDecrement }) {
    return (
        <View>
            <View>
                <TouchableOpacity style={styles.btn} onPress={onIncrement}>
                    <FontAwesome name='plus' size={30} color='black' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={onDecrement}>
                    <FontAwesome name='minus' size={30} color='black' />
                </TouchableOpacity>
            </View>
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'white',
        padding: 10
    }
})