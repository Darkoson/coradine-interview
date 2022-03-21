import { gql, useQuery } from "@apollo/client";
import { Candidate } from "../../models/candidate";


export const useQueryAllCandidate = (options: Candidate) => {
    const allCandidate = gql`
      query AllCandidate($value: CandidateInput) {
        allCandidate(input: $value) {
          _id
        }
      }
    `;
  
    const createCandidate = gql`
      mutation CreateCandidate($input: CandidateInput!) {
        createCandidate(input: $input) {
          _id
          email
          firstName
        }
      }
    `;

    return  useQuery(allCandidate, {
        variables: { input: options },
    }); 
}


export const useQuerySingleCandidate = (input: Candidate) => {
    const singleCandidate = gql`
      query SingleCandidate($singleCandidateInput: CandidateInput!) {
        singleCandidate(input: $singleCandidateInput) {
          _id
          email
          firstName
        }
      }
    `;

    return useQuery(singleCandidate, {
      variables: { input },
    }); 
}

