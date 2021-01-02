import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default class Input extends Component {
  render() {
    return <TextInput styles={styles.input} {...this.props} />;
  }
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    padding: 10,
    marginTop: 10,
    backgroundColor: 'red',
    borderRadius: 20,
  },
});
