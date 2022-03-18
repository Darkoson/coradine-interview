import { ApolloError } from "apollo-server-core";
import User, { UserModel } from "../graphql/schema/user.schema";
import { SignupInput, LoginInput } from "../graphql/types";

import bcrypt from "bcryptjs";
import Context from "../graphql/types/context";
import { signJwt } from "../utilities/jwt";

export class UserService {
  async login(input: LoginInput, context: Context) {
    const errorMessage = "Invalid email or password";
    const user: any = await UserModel.find().findByEmail(input.email).lean().exec();
    if (!user) {
      throw new ApolloError(errorMessage);
    }

    const isPasswordValid =  bcrypt.compareSync(input.password, user.password);
    if (!isPasswordValid) {
      throw new ApolloError(errorMessage);
    }

    const token = signJwt(user);

    context.res.cookie("accessToken", token, {
      maxAge: 3.154e10, 
      httpOnly: true,
      domain: "*",
      path: "/",
      sameSite: "strict",
      secure: false,
    });

    return token;
  }

  async signup(params: SignupInput): Promise<User> {
    return UserModel.create(params);
  }
}

export default UserService;
