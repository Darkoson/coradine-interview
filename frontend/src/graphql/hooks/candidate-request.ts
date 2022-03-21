import { gql, useMutation } from "@apollo/client";
import { Candidate } from "../../models/candidate";

export const MutationCreateCandidate = async (input: Candidate) => {
  const createCandidate = gql`
    mutation CreateCandidate($input: CandidateInput!) {
      createCandidate(input: $input) {
        _id
        email
        resume
      }
    }
  `;

  const [execCreateCandidate] = useMutation(createCandidate);

  const result = await execCreateCandidate({ variables: { input } });

  return result;
};
