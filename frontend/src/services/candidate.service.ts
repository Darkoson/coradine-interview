import apolloClient from "../graphql/client";
import { Candidate } from "../models/candidate";
import { CREATE_CANDIDATE } from "../graphql/queries/candidate.query";

class CandidateService {
  createCandidate = async (input: Candidate): Promise<Candidate> => {
    console.log("input = ", input);
    try {
      const response = await apolloClient.mutate<Candidate>({
        mutation: CREATE_CANDIDATE,
        variables: { input },
      });


      if (!response || !response.data) {
        throw new Error("Cannot create the candidate!");
      }

      console.log("in candidate service React: ", response.data);

      return response.data;
    } catch (err) {
      console.log("Error candidate service DATA: ", err);
      throw err;
    }
  };
}

const service = new CandidateService();

export default service;
