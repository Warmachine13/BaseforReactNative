import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import CounterContext from 'context/CounterContext';
class HomeScreen extends Component {
  // static contextType = ;
  set(user) {
    // console.log('entro');
    // CounterContext.Consumer.setUser({user});
  }

  render() {
    const {user, setUser} = this.context;
    return (
      <View>
        <Button
          title="Update User"
          onPress={() => {
            const newUser = {name: 'Joe', loggedIn: true};
            setUser(newUser);
            // console.log(this.context['setUser']({name: 'jair'}));
            // set(newUser);
          }}
        />
        {/* <CounterContext.Consumer> */}
        <Text>{`Current User: ${user.name}`}</Text>
        {/* </CounterContext.Consumer> */}
      </View>
    );
  }
}
HomeScreen.contextType = CounterContext;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default HomeScreen;
