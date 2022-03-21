import {
  getModelForClass,
  index,
  prop,
  QueryMethod,
} from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import { AsQueryMethod, QueryHelperThis } from "@typegoose/typegoose/lib/types"; 

@QueryMethod(findByEmail)
@index({ email: 1 })
@ObjectType()
export default class Candidate {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop({ required: true })
  email: string;

  @Field(() => String, { nullable: true })
  @prop()
  firstName: string;

  @Field(() => String, { nullable: true })
  @prop()
  lastName: string;

  @Field(() => String, { nullable: true })
  @prop()
  position: string;

  @Field(() => String, { nullable: true })
  @prop()
  photo: string;

  @Field(() => String, { nullable: true })
  @prop()
  resume: string;

  @Field(() => String, { nullable: true })
  @prop()
  status: string;

  @Field(() => String, { nullable: true })
  @prop()
  skillSet: string;

  
}

export const CandidateModel = getModelForClass<typeof Candidate, QueryHelpers>(
  Candidate
);

function findByStatus(
  this: QueryHelperThis<typeof Candidate, QueryHelpers>,
  status: Candidate["status"]
) {
  return this.find({ status });
}

function findByEmail(
  this: QueryHelperThis<typeof Candidate, QueryHelpers>,
  email: Candidate["email"]
) {
  return this.findOne({ email });
}

interface QueryHelpers {
  findByEmail: AsQueryMethod<typeof findByEmail>;
  findByStatus: AsQueryMethod<typeof findByStatus>;
}
