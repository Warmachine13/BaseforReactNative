import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import Input from 'components/Input';

class HomeScreen extends Component {
  emailRef = React.createRef();
  passwordRef = React.createRef();

  submit() {
    console.log('ee');
    const form = {};
    // console.log(this.passwordRef);
    if (this.emailRef?.value !== null) {
      console.log(1);
    }
  }
  render() {
    return (
      <View style={styles.root}>
        <Text>Home Screen</Text>
        {/* {['email', 'password'].map((item, index)) => (
          <TextInput
            style={styles.input}
            placeholder="email"
            ref={this.myRef}
            onChangeText={() => {}}
          />
        )} */}
        <Input placeholder="email" ref={this.emailRef} />
        <Input
          style={styles.input}
          placeholder="password"
          ref={this.passwordRef}
        />
        <Button styles={styles.button} onPress={this.submit} title="enter" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  input: {
    width: '90%',
    padding: 10,
    marginTop: 10,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  button: {
    width: '90%',
  },
});

export default HomeScreen;
