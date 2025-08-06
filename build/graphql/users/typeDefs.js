"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Boolean
  }
`;
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map