import { ApolloError } from "apollo-server-core";
import Candidate, { CandidateModel } from "../graphql/schema/candidate.schema";
import { CandidateInput } from "../graphql/types";
//import Context from "../graphql/types/context";

export class CandidateService {
  async createCandidate(
    input: CandidateInput
  ): Promise<Candidate> {
    //verify if an attachment was uploaded
    // save it in the right place and getback the url
    // add the url in to the database and return the candidate
    console.log("inside candidate service create input = ");

    // const output = await CandidateModel.create(input);

    return CandidateModel.findById("6234b5730f6a3ee28a717e2b").lean();
    //return output;
  }

  async findByEmail(email: string) {
    const candidateDoc = await CandidateModel.find()
      .findByEmail(email)
      .lean()
      .exec();
    return candidateDoc;
  }

  async updateCandidate(input: CandidateInput) {
    let result = null;
    let errorMessage = "The field must have a valid '_id' or 'email'";

    try {
      if (!!input._id) {
        result = CandidateModel.findByIdAndUpdate(
          input._id,
          { ...input },
          { new: true }
        );
        console.log("result=", result);
      } else if (!!input.email) {
        let email = input.email;
        result = CandidateModel.updateOne(
          { email },
          { ...input },
          { new: true }
        );
      } else {
        throw new ApolloError(
          "The field must have at leat one index field: '_id' or 'email' "
        );
      }

      return result;
    } catch (error) {
      throw new ApolloError(errorMessage);
    }
  }

  async findSingleCandidate(input: CandidateInput) {
    const result = await CandidateModel.findOne({ ...input }).lean();
    return result;
  }

  async findCandidates(input: CandidateInput | null): Promise<Candidate[]> {
    const document = input
      ? CandidateModel.find({ ...input })
      : CandidateModel.find();
    const result = await document.lean();
    console.log(result.length);

    return result;
  }
}

export default CandidateService;
