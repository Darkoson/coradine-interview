//import cors from "cors";
import express from "express";
import { createServer } from "http";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { connect } from "mongoose";

import { loadEnvironment } from "./config/loader";
import typeDefs from "./graphql-schema/typeDefs";
import resolvers from "./graphql-schema/resolvers";
// import UserModel from "./models/user";
// import { User } from "./models/user";

const app = express();
const httpServer = createServer(app);
loadEnvironment();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context: ({ req, res }: any) => ({ req, res }),
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

apolloServer.start().then(() => apolloServer.applyMiddleware({ app }));

app.get("/", async (req, res) => {

   let user  = req.body;
  console.log(user);
  
  // let user: User = {
  //   firstName: "Thomas",
  //   lastName: "Darko",
  //   email: "some email" + Math.random(),
  //   password: "thomas",
  //   role: 45,
  // };
  // console.log("xx=");
  // let xx = await UserModel.create(user);
  // console.log("user=", user);
  // console.log("xx=", xx);
  // res.send(xx);
});

// connection to the database
connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster-01.z3ewq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
)
  .then(() => {
    console.log(`🚀 successful connection to database`);
    httpServer.listen({ port: process.env.SERVER_PORT }, () => {
      console.log(
        `🚀 Server ready at http://localhost:${process.env.SERVER_PORT} and ${apolloServer.graphqlPath}
        `
      );
    });
  })
  .catch((err) => {
    console.log("The application failed to connect to the database  " + err);
  });
