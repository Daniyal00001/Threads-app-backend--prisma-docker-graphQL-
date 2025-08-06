


// -------------------------------------------Apollo Server--------------------------------------------------




import { ApolloServer } from "apollo-server-express";
import bodyParser from "body-parser";
import cors from "cors";
import type { Application } from "express";
import users from "./users";

export async function ApolloServerGraphQLLL(app: Application) {
  app.use(cors());
  app.use(bodyParser.json());

  // create ApolloServer
  const server = new ApolloServer({
    typeDefs: users.typeDefs,
    resolvers: users.resolvers,
  });

  await server.start();


server.applyMiddleware({ app: app as any });

}
