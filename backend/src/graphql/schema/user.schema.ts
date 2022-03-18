import {
  getModelForClass,
  index,
  pre,
  prop,
  QueryMethod,
  ReturnModelType,
} from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import bcrypt from "bcryptjs";
import { AsQueryMethod } from "@typegoose/typegoose/lib/types";

@pre<User>("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hashSync(this.password, salt);
  this.password = hash;
})
@QueryMethod(findByEmail)
@index({ email: 1 })
@ObjectType()
export default class User {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop({ required: true })
  email: string;

  @prop({ required: true })
  password: string;

  @Field(() => String)
  @prop({ required: true })
  firstName: string;

  @Field(() => String)
  @prop({ required: true })
  lastName: string;
}

export const UserModel = getModelForClass<typeof User, QueryHelpers>(User);

function findByEmail(
  this: ReturnModelType<typeof User, QueryHelpers>,
  email: User["email"]
) {
  return this.findOne({ email });
}

interface QueryHelpers {
  findByEmail: AsQueryMethod<typeof findByEmail>;
}
