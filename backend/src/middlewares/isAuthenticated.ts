import { AuthChecker } from "type-graphql";
import Context from "../graphql/types/context";

const isAuthenticated: AuthChecker<Context> = ({ context }) => {
  return !!context.user;
};

export default isAuthenticated;
