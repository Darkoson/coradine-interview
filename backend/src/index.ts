import "reflect-metadata";
// import express from "express";
// import cookieParser from "cookie-parser";

import dotenv from "dotenv";
dotenv.config();

import { connectToDatabase } from "./utilities/database";
import cors from "cors";
//import { getApolloServerStarted } from "./utilities/server";

import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import { resolvers } from "./graphql/resolvers";
import { buildSchema } from "type-graphql";
import Context from "./graphql/types/context";
import { verifyJwt } from "./utilities/jwt";
import User from "./graphql/schema/user.schema";

import express from "express";
import cookieParser from "cookie-parser";

async function bootstrapApplication() {
  const schema = await buildSchema({
    resolvers,
  });

  const app = express();
  app.use(cookieParser());
  app.use(cors({ origin: "*" }));

  const apolloServer = new ApolloServer({
    schema,
    context: (ctx: Context) => {
      const context = ctx;

      //console.log("context.user=", ctx.user);

      if (ctx.req.cookies.accessToken) {
        const user = verifyJwt<User>(ctx.req.cookies.accessToken);
        context.user = user;
      }
      return context;
    },
    plugins: [
      process.env.NODE_ENV == "production"
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });
  //apolloServer.applyMiddleware({ app, cors: false });

  // const { app, apolloServer } = await getApolloServerStarted();
  //apolloServer.applyMiddleware({ app });

  app.listen({ port: process.env.SERVER_PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${process.env.SERVER_PORT}  
🚀 gql on http://localhost:${process.env.SERVER_PORT}${apolloServer.graphqlPath}`);
  });

  connectToDatabase();
}

bootstrapApplication();
