import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import { resolvers } from "../graphql/resolvers";
import { buildSchema } from "type-graphql";
import Context from "../graphql/types/context";
import { verifyJwt } from "./jwt";
import User from "../graphql/schema/user.schema";

import express from "express"
import cookieParser from "cookie-parser";

export async function getApolloServerStarted() {
  const schema = await buildSchema({
    resolvers,
  });

    const app = express();
    app.use(cookieParser());

  const apolloServer = new ApolloServer({
    schema,
    context: (ctx: Context) => {
      const context = ctx;


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
  apolloServer.applyMiddleware({ app });


  return { app, apolloServer };
}
