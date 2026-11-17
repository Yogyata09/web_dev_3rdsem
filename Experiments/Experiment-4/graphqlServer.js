import express from 'express';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

// Create Express application
const app = express();

// Define GraphQL schema
const schema = buildSchema(`
    type Query {
        hello: String
        message: String
    }
`);

// Define resolver functions
const root = {
    hello: () => {
        return "Hello World from GraphQL!";
    },

    message: () => {
        return "Welcome to GraphQL API";
    }
};

// Set up GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

// Start server
app.listen(4000, () => {
    console.log("GraphQL server running at http://localhost:4000/graphql");
});
