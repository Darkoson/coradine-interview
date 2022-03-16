import { IResolvers } from "@graphql-tools/utils";
import * as todo from "./todoResolvers";

const resolvers: IResolvers = {
  Query: {
    getUser: todo.getUser,
    getTodos: todo.getTodos,
  },
  Mutation: {
    addTodo: todo.addTodo,
  },
  Subscription: {
    newTodo: todo.newTodo,
  },
};

export default resolvers;
