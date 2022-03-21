import { IsEmail, MaxLength, MinLength } from "class-validator";
import { Stream } from "stream";
import { Field, InputType } from "type-graphql";

@InputType()
export class SignupInput {
  @IsEmail()
  @Field(() => String)
  email: string;

  @MinLength(6, {
    message: "password must be at least 6 characters long",
  })
  @MaxLength(50, {
    message: "password must not be longer than 50 characters",
  })
  @Field(() => String)
  password: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;
}

@InputType()
export class LoginInput {
  @IsEmail()
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

@InputType()
export class CandidateInput {
  @Field(() => String, { nullable: true })
  _id: string;

  @IsEmail()
  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  firstName: string;

  @Field(() => String, { nullable: true })
  lastName: string;

  @Field(() => String, { nullable: true })
  position: string;

  @Field(() => String, { nullable: true })
  skillSet: string;

  @Field(() => UploadFile, { nullable: true })
  upload: any;
}

@InputType()
export class UploadFile {
  @Field(() => String, { nullable: true })
  filename: string;
  @Field(() => String, { nullable: true })
  mimetype: string;
  @Field(() => String, { nullable: true })
  encoding: string;
  createReadStream?: () => Stream;
}

// import { createUnionType } from "type-graphql";

// const SearchResultUnion = createUnionType({
//   name: "SearchResult", // the name of the GraphQL union
//   types: () => [CandidateInput, ] as const, // function that returns tuple of object types classes
// });