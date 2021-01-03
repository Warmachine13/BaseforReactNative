import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Alert} from 'react-native';
import AuthContext from 'context/AuthContext';
import {Navigation} from 'react-native-navigation';

// import Input from 'components/Input';

class SettingsScreen extends Component {
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
    this.context.logout();
    Navigation.setRoot(require('routes/auth').loginRoot);
    // Navigation.push
    // if (this.emailRef?.current?.focus() !== null) {
    //   console.log(1);
    // }
  }
  render() {
    console.log(this.context);
    return (
      <View style={styles.root}>
        <View style={{width: '90%', margin: 15}}>
          <Button
            styles={styles.button}
            onPress={() => this.submit()}
            title="Logout"
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

SettingsScreen.contextType = AuthContext;

export default SettingsScreen;
