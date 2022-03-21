import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import CandidateService from "../../services/candidate.service";
import Candidate from "../schema/candidate.schema";
import { CandidateInput} from "../types";
import Context from "../types/context";

@Resolver()
class CandidateResolver {
  constructor(private candidateService: CandidateService) {
    this.candidateService = new CandidateService();
  }

  @Mutation(() => Candidate)
  createCandidate(
    @Arg("input") input: CandidateInput,
    @Ctx() context: Context
  ) {
    return this.candidateService.createCandidate(input , context);
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
