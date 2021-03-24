import express from 'express';

//Using Graphql;
import {graphqlHTTP} from 'express-graphql'

import schema from './schema';

//Initiating the Express()
const App = express();

//app.get();
App.get('/', (req, res) => {
    res.send('Graphql is Amazing!');
})

const root = {hello: () => 'Welcome to GraphQl'};

App.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))
const PORT = 8080;

//listening the server in the Particular Port
App.listen(PORT, () => {console.log(`Running on server port localhost:${PORT}/graphQL`)})