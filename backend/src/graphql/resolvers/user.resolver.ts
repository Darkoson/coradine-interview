import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import UserService from "../../services/user.service";
import User from "../schema/user.schema";
import { SignupInput, LoginInput } from "../types";
import Context from "../types/context";

@Resolver()
class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Mutation(() => User)
  signup(@Arg("input") input: SignupInput) {
    return this.userService.signup(input);
  }

  @Mutation(() => String)
  login(@Arg("input") input: LoginInput, @Ctx() context: Context) {
    return this.userService.login(input, context);
  }

  @Query(() => User)
  me(@Ctx() context: Context) {
    return context.user
  }
}

export default UserResolver;
