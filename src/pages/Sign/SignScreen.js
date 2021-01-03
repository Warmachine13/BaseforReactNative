import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Alert} from 'react-native';
import AuthContext from 'context/AuthContext';
import {Navigation} from 'react-native-navigation';

// import Input from 'components/Input';

class SignScreen extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.user = {
      email: '',
      password: '',
    };
  }

  submit() {
    console.log(this);
    if (this.user === undefined || !this.user.email || !this.user.password) {
      Alert.alert('Erro', 'Digite seu email e senha');
      return;
    }

    const form = {
      name: 'ramdom',
      email: this.user.email,
      password: this.user.password,
      sessionToken: 'apsodhfp',
    };
    this.context.setUser(form);
    Navigation.push(this.props.componentId, {
      // stack: require('routes/main'),
      component: {
        name: 'Home',
      },
    });
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
          onSubmitEditing={() => this.passwordRef.current.focus()}
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Digite sua Senha"
          placeholderTextColor="#fff"
          ref={this.passwordRef}
          onSubmitEditing={() => this.submit()}
          onChangeText={(e) => (this.user.password = e)}
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

SignScreen.contextType = AuthContext;

export default SignScreen;
