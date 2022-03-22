import path from "path";
import fs from "fs";

import { FileUpload } from "../graphql/types";

const ABSOLUTE_PUBLIC_FOLDER = path.join(__dirname, "../../public/");

const USER_PROFILE_FOLDER = "candidates/profile/";
const CANDIDATE_RESUME_FOLDER = "candidates/resume/";
const CANDIDATE_PROFILE_FOLDER = "candidates/profile/";

enum FileType {
  USER_PROFILE = 0,
  CANDIDATE_PROFILE = 1,
  CANDIDATE_RESUME = 2,
}

class FileService {
  async saveCandidateResume(uploadedFile: FileUpload): Promise<string> {
    console.log("inside file service uploaded =");

    const filePath = await this.processFile(
      uploadedFile,
      FileType.CANDIDATE_RESUME
    );

    return filePath;
  }

  private async processFile(
    uploadedFile: FileUpload,
    type: FileType
  ): Promise<string> {
    console.log("inside file service process =", uploadedFile);
    const { filename, createReadStream } = uploadedFile;

    const newFileName = filename.toLowerCase().replace(" ", "");

    let destinationFile = "";

    switch (type) {
      case FileType.CANDIDATE_RESUME:
        destinationFile = CANDIDATE_RESUME_FOLDER + newFileName;
        break;
      case FileType.CANDIDATE_PROFILE:
        destinationFile = CANDIDATE_PROFILE_FOLDER + newFileName;
        break;
      case FileType.USER_PROFILE:
        destinationFile = USER_PROFILE_FOLDER + newFileName;
        break;

      default:
        break;
    }

    const absolutePath = ABSOLUTE_PUBLIC_FOLDER + destinationFile;
    const stream = createReadStream();
    await stream.pipe(fs.createWriteStream(absolutePath));

    return destinationFile;
  }
}

export default  FileService;
