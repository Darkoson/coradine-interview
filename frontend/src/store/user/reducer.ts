import { User } from "../../models/user";
import { UserAction } from "./action";
import * as types from "./type";



export const UserReducer = (
  state: User | null = null,
  action: UserAction
): User | null => {
  switch (action.type) {
    case types.USER_TYPE:
      console.log("user reducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};