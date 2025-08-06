"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const db_1 = require("./lib/db");
async function startServer() {
    const app = (0, express_1.default)();
    const server = new ApolloServer({
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
            Mutation: {
                createUser: async (_, { firstName, lastName, email, password }) => {
                    await db_1.prismaClient.user.create({
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
    app.use(express_1.default.json());
    app.listen({ port: 3000 }, () => {
        console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
    });
}
startServer();
//# sourceMappingURL=index.js.map