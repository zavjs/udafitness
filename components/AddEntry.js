import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getMetricMetaInfo, timeToString } from '../utils/helpers';
import UdaciSlider from './UdaciSlider';
import UdaciSteppers from './UdaciSteppers';
import DateHeader from './DateHeader';


const styles = StyleSheet.create({
    btn: {
      backgroundColor: '#E53224',
      padding: 10,
      paddingLeft: 50,
      paddingRight: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      maxWidth: '50%'
    },
    btnText: {
      color: '#fff'
    }
});

function SubmitBtn ({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={onPress}>
            <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
    );
}

export default class AddEntry extends Component {

    state = {
        run: 0,
        bike: 10,
        swim: 0,
        sleep: 0,
        eat: 5
    };

    increment = (metric) => {
        const { max, step } = getMetricMetaInfo(metric);

        this.setState((state) => {
            const count = state[metric] + step;

            return {
                ...state,
                [metric]: count > max ? max : count
            }
        });
    }

    decrement = (metric) => {
        this.setState((state) => {
            const count = state[metric] - getMetricMetaInfo(metric).step;

            return {
                ...state,
                [metric]: count < 0 ? 0 : count
            }
        });
    }

    slide = (metric, value) => {
        this.setState(() => ({
            [metric]: value
        }))
    }

    submit = () => {
        const key = timeToString();
        const entry = this.state;

        // Update Redux
        // Navigate to Home
        this.setState(() => ({
            run: 0,
            bike: 0,
            swim: 0,
            sleep: 0,
            eat: 0
        }));
        // Save to 'DB'

        // Clear local notification
    }

    render () {
        const metaInfo = getMetricMetaInfo();

        return (
            <View>
                <DateHeader date={(new Date().toLocaleDateString())} />
                {Object.keys(metaInfo).map((key) => {
                    const { getIcon, type, ...rest } =  metaInfo[key];
                    const value = this.state[key];

                    return (
                        <View key={key}>
                            {getIcon()}
                            { type === 'slider' ?
                                <UdaciSlider 
                                    value={value}
                                    onChange={(value) => this.slide(key, value)} {...rest} /> :
                                
                                <UdaciSteppers
                                    value={value}
                                    onIncrement={() => this.increment(key)}
                                    onDecrement={() => this.decrement(key)}
                                    {...rest}
                                />
                            }
                        </View>
                    )
                })}
                
                <SubmitBtn onPress={this.submit} />
            </View> 
        );
    }
}

