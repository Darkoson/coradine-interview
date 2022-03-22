import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import Candidate from "../schema/candidate.schema";
import { CandidateInput } from "../types";
import Context from "../types/context";

import CandidateService from "../../services/candidate.service";
import FileService from "../../services/file.service";

@Resolver()
class CandidateResolver {
  constructor(private candidateService: CandidateService) {
    this.candidateService = new CandidateService();
  }

  @Mutation(() => Candidate)
  async createCandidate(
    @Arg("input") input: CandidateInput,
    @Ctx() context: Context
  ) {
    console.log("inside resolver uploadedFile =");

    if (input.upload) {
      const uploadedFile = await input.upload.file;
      const fileService = new FileService();
      const resume = uploadedFile
        ? await fileService.saveCandidateResume(uploadedFile)
        : "";

      input.resume = resume;
    }

    console.log("input after saving file in resolver = ");

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
