//Temporary / Internal Database...
const friendDatabase = {};

class Friend {
  constructor(id, { firstName, lastName, gender, email, contacts }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.contacts = contacts;
  }
}

//resolver map
export const resolvers = {
  Query: {
    getFriend: ({ id }) => {
      return new Friend(id, friendDatabase[id]);
    },
  },
  Mutation: {
    createFriend: ({ input }) => {
      let id = require("crypto").randomBytes(10).toString("hex"); //Cryptographic Algorithm!
      friendDatabase[id] = input;
      return new Friend(id, input);
    },
  },
};

// //Temporary / Internal Database...
// const friendDatabase = {};

// class Friend {
//   constructor(id, { firstName, lastName, gender, email, contacts }) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.gender = gender;
//     this.email = email;
//     this.contacts = contacts;
//   }
// }

// const resolvers = {
//   getFriend: ({ id }) => {
//     return new Friend(id, friendDatabase[id]);
//   },
//   createFriend: ({ input }) => {
//     let id = require("crypto").randomBytes(10).toString("hex"); //Cryptographic Algorithm!
//     friendDatabase[id] = input;
//     return new Friend(id, input);
//   },
// };

// export default resolvers;
