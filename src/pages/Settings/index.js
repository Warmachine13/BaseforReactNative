import {register} from 'react-native-bundle-splitter';

export default register({
  require: () => require('./SettingsScreen'),
  group: 'LOGGED',
});
