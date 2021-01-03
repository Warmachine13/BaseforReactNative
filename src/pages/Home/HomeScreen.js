import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AuthContext from 'context/AuthContext';

class HomeScreen extends Component {
  render() {
    const {user, setUser} = this.context;
    return (
      <View>
        {/* <AuthContext.Consumer> */}
        <Text>{`Current User: ${user.name}`}</Text>
        {/* </AuthContext.Consumer> */}
      </View>
    );
  }
}
HomeScreen.contextType = AuthContext;

export default HomeScreen;
