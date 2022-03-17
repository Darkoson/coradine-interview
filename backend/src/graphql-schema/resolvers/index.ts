import { IResolvers } from "@graphql-tools/utils";
import { getUser, signup } from "./userResolvers";

const resolvers: IResolvers = {
  Query: {
    getUser,
  },
  Mutation: {
    signup,
  },
};

export default resolvers;
