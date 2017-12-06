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
        <TouchableHighlight 
          style={styles.btn} 
          underlayColor='#d4271b'
          onPress={this.handlePress}>
          <Text style={styles.btnText}>Touchable Highlight</Text>
        </TouchableHighlight>

        <TouchableWithoutFeedback>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Touchable Highlight</Text>
          </View>
        </TouchableWithoutFeedback>
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