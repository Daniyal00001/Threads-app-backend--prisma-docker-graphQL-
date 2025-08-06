import express from "express";
import type { Request, Response } from "express";
import { aborted } from "util";
const bodyParser = require("body-parser");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
import {prismaClient} from "./lib/db";



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

        type Mutation {
            createUser(firstName: String!, lastName: String!, email: String!, password: String!): Boolean
        }
        `,
        resolvers: {
          
                    Mutation : {
                        createUser: async (_: any, { firstName, lastName, email, password }:{firstName: string, lastName: string, email: string, password: string}) => {
                            await prismaClient.user.create({
                                data: {
                                    firstName,
                                    lastName,
                                    email,
                                    password,
                                    salt: "salt"
                                }
                            });
                            return true;
                        }
                    },
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