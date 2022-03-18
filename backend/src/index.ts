import "reflect-metadata";
import express from "express";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
dotenv.config();

import { connectToDatabase } from "./utilities/database";
import { getApolloServerStarted } from "./utilities/server";

async function bootstrapApplication() {
  const app = express();
  app.use(cookieParser());

  const apolloServer = await getApolloServerStarted();
  apolloServer.applyMiddleware({ app });

  app.listen({ port: process.env.SERVER_PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${process.env.SERVER_PORT}  
🚀 gql on http://localhost:${process.env.SERVER_PORT}${apolloServer.graphqlPath}`
    );
  });

  connectToDatabase();
}

bootstrapApplication(); 