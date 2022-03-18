import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CandidateService from "../../services/candidate.service";
import Candidate from "../schema/candidate.schema";
import { CandidateInput } from "../types";

@Resolver()
class CandidateResolver {
  constructor(private candidateService: CandidateService) {
    this.candidateService = new CandidateService();
  }

  @Mutation(() => Candidate)
  createCandidate(@Arg("input") input: CandidateInput) {
    return this.candidateService.createCandidate(input);
  }

  @Mutation(() => Candidate)
  updateCandidate(@Arg("input") input: CandidateInput) {
    return this.candidateService.updateCandidate(input);
  }

  @Query(() => Candidate, { nullable: true })
  singleCandidate(@Arg("input") input: CandidateInput) {
    return this.candidateService.findSingleCandidate(input);
  }

  @Query(() => [Candidate])
  allCandidate(@Arg("input") input: CandidateInput) {
    return this.candidateService.findCandidates(input);
  }
}

export default CandidateResolver;
