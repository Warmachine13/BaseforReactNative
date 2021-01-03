import React, {createContext, Component} from 'react';
// import {saveUser} from ;
const UserContext = createContext();

class UserProvider extends Component {
  state = {
    user: {},
    loading: false,
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    const user = require('realmModels/model').findUser();
    this.setState({user});
  };
  logout = () => {
    require('realmModels/model').deleteUser();
    this.setState();
  };

  setUser = (user) => {
    console.log('chegou', user);
    require('realmModels/model').saveUser(
      user.name,
      user.email,
      user.sessionToken,
    );
    this.setState({user});
  };

  render() {
    const {setUser, loadUser, logout} = this;
    return (
      <UserContext.Provider value={{setUser, loadUser, logout, ...this.state}}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export {UserProvider};

// export const UserConsumer = UserContext.Consumer;

export default UserContext;
