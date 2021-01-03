import React, {PureComponent} from 'react';
import {TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';

export default class Button extends PureComponent {
  render() {
    return (
      <TouchableOpacity styles={styles.button} {...this.props}>
        {this.props.loading ? <ActivityIndicator /> : this.props.children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    padding: 10,
    marginTop: 10,
    backgroundColor: 'red',
    borderRadius: 20,
  },
});
