import express from "express";

//Using Graphql;
import { graphqlHTTP } from "express-graphql";

import { schemaOne, schemaTwo } from "./schema";

//Initiating the Express()
const App = express();

//app.get();
App.get("/", (req, res) => {
  res.send("Graphql is Amazing!");
});

// const root = {hello: () => 'Welcome to GraphQl'};

const friendDatabase = {};
class Friend {
  constructor(id, {firstName, lastName, gender, email}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
  }
}

const friend_root = {
  friend: () => {
    return {
      id: 1232143244234,
      firstName: "Balaji",
      lastName: "Janarthanan",
      gender: "Male",
      email: "balajijanarthanan1997@gmail.com"
    };
  },
  createFriend: ({input}) => {
    let id = require('crypto').randomBytes(10).toString('hex'); //Cryptographic Algorithm!
    friendDatabase[id] = input;
    return new Friend(id, input)
  }
};

// App.use('/graphql', graphqlHTTP({
//     schema: schemaOne,
//     rootValue: root,
//     graphiql: true,
// }))

App.use(
  "/graphql/user-defined/type",
  graphqlHTTP({
    schema: schemaTwo,
    rootValue: friend_root,
    graphiql: true,
  })
);
const PORT = 8080;

//listening the server in the Particular Port
App.listen(PORT, () => {
  console.log(`Running on server port localhost:${PORT}/graphQL`);
});
