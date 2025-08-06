import { gql } from "apollo-server-express";

const typeDefs = gql`
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

export default typeDefs;
