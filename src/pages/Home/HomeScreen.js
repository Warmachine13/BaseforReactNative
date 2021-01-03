import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import AuthContext from 'context/AuthContext';

class HomeScreen extends Component {
  render() {
    const {user, setUser} = this.context;
    return (
      <View>
        <Button
          title="Update User"
          onPress={() => {
            const newUser = {name: 'Joe', loggedIn: true};

            setUser(newUser);
            // console.log(this.context.setUser({name: 'jair'}));
            // set(newUser);
          }}
        />
        {/* <AuthContext.Consumer> */}
        <Text>{`Current User: ${user.name}`}</Text>
        {/* </AuthContext.Consumer> */}
      </View>
    );
  }
}
HomeScreen.contextType = AuthContext;

export default HomeScreen;
