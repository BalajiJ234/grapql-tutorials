import express from 'express';

//Initiating the Express()
const App = express();

//app.get();
App.get('/', (req, res) => {
    res.send('Graphql is Amazing!');
})
const PORT = 8080;

//listening the server in the Particular Port
App.listen(PORT, () => {console.log(`Running on server port localhost:${PORT}/graphQL`)})