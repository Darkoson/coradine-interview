import { User } from "../../models/user";

export const USER_TYPE = "USER_TYPE";

export interface UserAction {
  type: string;
  payload: User | null;
}

export const UserReducer = (
  state: User | null = null,
  action: UserAction
): User | null => {
  switch (action.type) {
    case USER_TYPE:
      console.log("user reducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};