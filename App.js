import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

import AddEntry from './components/AddEntry';

export default class App extends React.Component {
  handlePress = () => {
    alert('Hello')
  }

  render() {
    return (
      <View>
        <AddEntry />
      </View>
    );
  }
}

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
})