import { User } from "../../models/user";

export interface UserAction {
  type: string;
  payload: User | null;
}
