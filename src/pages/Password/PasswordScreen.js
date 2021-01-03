import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Alert} from 'react-native';
import AuthContext from 'context/AuthContext';
import {Navigation} from 'react-native-navigation';

// import Input from 'components/Input';

class PasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.user = {
      email: '',
    };
  }

  submit() {
    console.log(this);
    if (this.user === undefined || !this.user.email || !this.user.password) {
      Alert.alert('Erro', 'Digite sua senha');
      return;
    }

    // const form = {
    //   name: 'ramdom',
    //   email: this.user.email,
    //   password: this.user.password,
    //   sessionToken: 'apsodhfp',
    // };
    // this.context.setUser(form);
    // Navigation.push
    // if (this.emailRef?.current?.focus() !== null) {
    //   console.log(1);
    // }
  }
  render() {
    return (
      <View style={styles.root}>
        <TextInput
          placeholder="Digite seu Email"
          placeholderTextColor="#fff"
          ref={this.emailRef}
          style={styles.input}
          onChangeText={(e) => (this.user.email = e)}
          onSubmitEditing={() => this.submit()}
        />

        <View style={{width: '90%', margin: 15}}>
          <Button
            styles={styles.button}
            onPress={() => this.submit()}
            title="enter"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  input: {
    width: '90%',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#000',
    borderRadius: 10,
    color: '#fff',
  },
  button: {
    width: '90%',
    borderRadius: 10,
  },
});

PasswordScreen.contextType = AuthContext;

export default PasswordScreen;
