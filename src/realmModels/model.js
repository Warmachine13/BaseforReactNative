const Realm = require('realm');

class User {}
User.schema = {
  name: 'User',
  primaryKey: 'name',
  properties: {
    name: 'string?',
    email: 'string?',
    sessionToken: 'string?',
    // password: 'string',
    // age: {type: 'int', default: 0},
  },
};

function realmToPlainObject(realmObj) {
  return JSON.parse(JSON.stringify(realmObj));
}

export const user = new Realm({schema: [User]});

export const saveUser = (name, email, sessionToken) => {
  try {
    user.write(() => {
      user.create('User', {name, email, sessionToken});
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = () => {
  try {
    user.write(() => {
      let allUsers = user.objects('User');
      user.delete(allUsers);
    });
  } catch (error) {
    console.log(error);
  }
};

export const findUser = () => {
  try {
    let users = user.objects('User');
    return {
      name: users[0].name,
      email: users[0].email,
      sessionToken: users[0].sessionToken,
    };
  } catch (error) {
    console.log('find usere 2', error);
  }
};

// export const findToken = () => {
//   let dogs = user.objects('User');
//   let tanDogs = dogs.filtered('sessionToken = "tan" AND name BEGINSWITH "B"');
// };
