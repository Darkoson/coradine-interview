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

import {
  graphqlUploadExpress, // A Koa implementation is also exported.
} from "graphql-upload";

import express from "express";

export async function getApolloServerStarted() {
  const schema = await buildSchema({
    resolvers,
  });

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

  const app = express();
  app.use(graphqlUploadExpress());
  app.use(express.static("public"));

  return { app, apolloServer };
}
