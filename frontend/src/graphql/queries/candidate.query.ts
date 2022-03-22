import { gql} from "@apollo/client";


export const  CREATE_CANDIDATE = gql`
    mutation CreateCandidate($input: CandidateInput!) {
      createCandidate(input: $input) {
        _id
        email
        resume
      }
    }
  `;

 
