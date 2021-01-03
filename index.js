import React from 'react';
import {Navigation} from 'react-native-navigation';
import {UserProvider} from 'context/AuthContext';

import SignScreen from 'pages/Sign';
import PasswordScreen from 'pages/Password';
import HomeScreen from 'pages/Home';
import SettingsScreen from 'pages/Settings';

Navigation.registerComponent(
  'Home',
  () => (props) => (
    <UserProvider>
      <HomeScreen {...props} />
    </UserProvider>
  ),
  undefined,
);
Navigation.registerComponent(
  'Settings',
  () => (props) => (
    <UserProvider>
      <SettingsScreen {...props} />
    </UserProvider>
  ),
  undefined,
);
Navigation.registerComponent(
  'Sign',
  () => (props) => (
    <UserProvider>
      <SignScreen {...props} />
    </UserProvider>
  ),
  undefined,
);
Navigation.registerComponent(
  'Password',
  () => (props) => (
    <UserProvider>
      <PasswordScreen {...props} />
    </UserProvider>
  ),
  undefined,
);

Navigation.events().registerAppLaunchedListener(async () => {
  const user = require('realmModels/model').findUser();
  // console.log('entr', user);
  // const preload = require('react-native-bundle-splitter').preload;
  // if (user === undefined) {
  //   await preload().group('NOTLOGGED');
  // } else {
  //   await preload().group('LOGGED');
  // }
  Navigation.setRoot(
    user === undefined
      ? require('routes/auth').loginRoot
      : require('routes/main').mainRoot,
  );
});
