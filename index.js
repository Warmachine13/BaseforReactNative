import React from 'react';
import {Navigation} from 'react-native-navigation';
import {UserProvider} from 'context/AuthContext';
// import {CounterContextProvider} from 'context/CounterContext';

import {register} from 'react-native-bundle-splitter';

const SignScreen = register({
  require: () => require('pages/Sign'),
  group: 'Sign',
});
const PasswordScreen = register({require: () => require('pages/Password')});
const HomeScreen = register({require: () => require('pages/Home')});
const SettingsScreen = register({
  require: () => require('pages/Settings'),
});

Navigation.registerComponent(
  'Home',
  () => (props) => (
    <UserProvider>
      <HomeScreen {...props} />
    </UserProvider>
  ),
  undefined,
);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('Sign', () => SignScreen);
Navigation.registerComponent('Password', () => PasswordScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(
    true ? require('routes/auth').loginRoot : require('routes/main').mainRoot,
  );
});
