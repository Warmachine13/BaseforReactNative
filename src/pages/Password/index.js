import {register} from 'react-native-bundle-splitter';

export default register({
  require: () => require('./PasswordScreen'),
  group: 'NOTLOGGED',
});
