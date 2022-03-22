import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import Candidate from "../schema/candidate.schema";
import { CandidateInput } from "../types";
import Context from "../types/context";

import CandidateService from "../../services/candidate.service";
import FileService from "../../services/file.service";

@Resolver()
class CandidateResolver {
  constructor(
    private candidateService: CandidateService,
    private fileService: FileService
  ) {
    this.candidateService = CandidateService.$_getInstance();
    this.fileService = FileService.$_getInstance();
  }

  @Mutation(() => Candidate)
  async createCandidate(
    @Arg("input") input: CandidateInput,
    @Ctx() context: Context
  ) {
    const uploadedFile = await input.upload;

    if (uploadedFile) {
      const resume = await this.fileService.saveCandidateResume(uploadedFile);
      input.resume = resume;
    }

    console.log("input after saving file in resolver = ", input);

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
