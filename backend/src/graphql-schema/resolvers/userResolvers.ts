//import { v4 } from "uuid";
import { request } from "express";
import UserModel, { User, UserDocument } from "../../models/user";
import { GqlContext } from "../GqlContext";


export const signup = async (
  parent: any,
  args: {},
  ctx: GqlContext,
  info: any
  ): Promise<UserDocument> => {
  let user: User = request.body;
  console.log(user);
  
  let saved: UserDocument = await UserModel.create(user);
  return saved;
};

export const login = async (
  parent: any,
  args: {},
  ctx: GqlContext,
  info: any
  ): Promise<UserDocument> => {
    let user: User = request.body;
  let saved: UserDocument = await UserModel.create(user);
  return saved;
};

export const getUser = async (
  parent: any,
  args: { id: string },
  ctx: GqlContext,
  info: any
): Promise<User> => {
  let user: User = {
    firstName: "Thomas",
    lastName: "Darko",
    email: "some email",
    role: 4,
    password: "thomas",
  };

  let xx = UserModel.create(user);
  console.log("user=", user);
  console.log("xx=", xx);
  return user;
};

export const getUsers = async (
  parent: any,
  args: {},
  ctx: GqlContext,
  info: any
  ): Promise<User> => {
    let user: User = {
    firstName: "Thomas",
    lastName: "Darko",
    email: "some email",
    password: "thomas",
    role: 0,
  };
  
  let xx = await UserModel.create(user);
  console.log("user=", user);
  console.log("xx=", xx);
  
  return xx;
};
