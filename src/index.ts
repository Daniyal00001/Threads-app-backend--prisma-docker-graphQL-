// src/index.ts
import express from "express";
import cors from "cors";
import { ApolloServerGraphQLLL } from "./graphql";

async function startServer() {

  const app = express();
  app.use(cors());
  app.use(express.json());

  
  await ApolloServerGraphQLLL(app);


  app.listen(3000, () => {
    console.log(`🚀 Server ready at http://localhost:3000`);
  });
}

startServer();
