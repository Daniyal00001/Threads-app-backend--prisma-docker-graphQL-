import express from "express";
import type { Request, Response } from "express";
import { aborted } from "util";
const bodyParser = require("body-parser");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");

async function startServer() {
    const app = express(); 
    const server = new ApolloServer({                                                      //servers
        typeDefs: `

         type Todo {
            id: ID!
            title: String!
            completed: Boolean!
        }

        type Query {
            todos: [Todo],
        }
        `,
        resolvers: {
        
        }

    });
    await server.start();
    server.applyMiddleware({ app });

    app.use(cors());
    app.use(bodyParser.json()); 
    app.use(express.json());


    app.listen({ port: 3000 }, () => {
        console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
    });
}

startServer();