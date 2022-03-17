import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    role: Int!
    photo: String
    scheduledInterviews: [Interview]
  }

  input UserInput {
    _id: ID
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    role: Int!
    photo: String
  }

  type AuthData {
    userId: ID!
    email: String!
    token: String!
    tokenExpiration: Int!
  }

  type Skill {
    _id: ID!
    name: String!
    description: String!
  }

  type CandidateSkill {
    name: String!
    level: String!
  }

  type Candidate {
    _id: ID!
    email: String!
    firstName: String
    lastName: String
    photo: String
    skillSet: [CandidateSkill]
    position: String
    resume: String
    verificationCode: String
  }

  type Question {
    id: ID!
    skillId: ID!
    question: String!
    answer: String
  }

  type InterviewScore {
    skill: ID!
    score: Float!
  }

  type Interview {
    id: ID!
    candidateId: ID!
    interviwerId: ID!
    comment: String
    selected: String
    score: [InterviewScore]
    status: Int!
  }

  type Query {
    login(email: String!, password: String!): AuthData!
    getUser(id: ID!): [User]
    getUsers: [User!]

    getCandidate(id: ID!): Candidate
    getCandidates(ids: String!): [Candidate]
    getCandidateByEmail(email: String!): Candidate

    getInterview(id: ID!): Interview
    getInterviews(ids: String): Interview
    getInterviewsByStatus(status: Int!): [Interview]
    getUserInterviews(userId: ID!): [Interview]

    getSkill(id: ID!): Skill
    getSkills(ids: String): [Skill]

    getQuestion(id: ID!): Question
    getQuestions(ids: String): [Question]
    getQuestionsBySkill(skillId: ID!): [Question]
  }


  type Mutation {

    signup(arg: UserInput!): User!

    updateUser(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      role: Int!
      photo: String
    ): User!

    addCandidate(email: String!): Candidate
    updateCandidateProfile(email: String!): Candidate
  }
`;

export default typeDefs;
