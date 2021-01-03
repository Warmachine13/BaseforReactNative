import {register} from 'react-native-bundle-splitter';

export default register({
  require: () => require('./SignScreen'),
  group: 'NOTLOGGED',
});
