import React, {createContext, Component} from 'react';

const UserContext = createContext();

class UserProvider extends Component {
  state = {
    user: {name: 'lucas'},
  };

  setUser = (user) => {
    this.setState({user});
  };

  render() {
    const {user, j} = this.state;
    const {setUser} = this;
    return (
      <UserContext.Provider
        value={{
          user,
          j,
          setUser: setUser,
        }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export {UserProvider};

// export const UserConsumer = UserContext.Consumer;

export default UserContext;
