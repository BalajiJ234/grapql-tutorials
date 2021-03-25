import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";

//Initiating the Express()
const App = express();

//app.get();
App.get("/", (req, res) => {
  res.send("Graphql is Amazing!");
});

App.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
const PORT = 8080;

//listening the server in the Particular Port
App.listen(PORT, () => {
  console.log(`Running on server port localhost:${PORT}/graphQL`);
});

// import express from "express";
// import { graphqlHTTP } from "express-graphql";
// import schema from "./schema";
// import resolvers from "./resolvers";

// //Initiating the Express()
// const App = express();

// //app.get();
// App.get("/", (req, res) => {
//   res.send("Graphql is Amazing!");
// });

// const root = resolvers;

// App.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );
// const PORT = 8080;

// //listening the server in the Particular Port
// App.listen(PORT, () => {
//   console.log(`Running on server port localhost:${PORT}/graphQL`);
// });
