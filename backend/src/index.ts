//import cors from "cors";
import express from "express";
import { createServer } from "http";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";

import { loadEnvironment } from "./config/loader";
import typeDefs from "./graphql-schema/typeDefs";
import resolvers from "./graphql-schema/resolvers";


const app = express();
const httpServer = createServer(app);
loadEnvironment();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context: ({ req, res }: any) => ({ req, res }),
});

apolloServer.start().then(() => apolloServer.applyMiddleware({ app }));

httpServer.listen({ port: process.env.SERVER_PORT }, () => {
  console.log(
    `🚀 Server ready at http://localhost:${process.env.SERVER_PORT}${apolloServer.graphqlPath}`
  );
});
