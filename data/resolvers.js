import { Friends, Aliens } from "./dbConnectors";

//resolver map
export const resolvers = {
  Query: {
    getFriend: ({ id }) => {
      return new Friend(id, friendDatabase[id]);
    },
  },
  Mutation: {
    createFriend: (root, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        email: input.email,
        language: input.language,
        age: input.age,
        contacts: input.contacts,
      });

      newFriend.id = newFriend._id;

      return new Promise((resolve, object) => {
        newFriend.save((err) => {
          if (err) reject(err);
          else resolve(newFriend);
        });
      });
    },

    updateFriend: (root, { input }) => {
      return new Promise((resolve, object) => {
        Friends.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (err, friend) => {
            if (err) reject(err);
            else resolve(friend);
          }
        );
      });
    },

    deleteFriend: (root, { id }) => {
      return new Promise((resolve, object) => {
        Friends.remove({ _id: id }, (err) => {
          if (err) reject(err);
          else resolve("Successfully deleted the friend!");
        });
      });
    },
  },
};

// //Temporary / Internal Database...Second...
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

// //resolver map
// export const resolvers = {
//   Query: {
//     getFriend: ({ id }) => {
//       return new Friend(id, friendDatabase[id]);
//     },
//   },
//   Mutation: {
//     createFriend: ({ input }) => {
//       let id = require("crypto").randomBytes(10).toString("hex"); //Cryptographic Algorithm!
//       friendDatabase[id] = input;
//       return new Friend(id, input);
//     },
//   },
// };

//....first
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
