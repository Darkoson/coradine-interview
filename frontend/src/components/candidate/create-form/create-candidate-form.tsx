import { useForm } from "react-hook-form";
import "./create-candidate-form.css";
//import { Candidate } from "../../../models/candidate";
import candidateService from "../../../services/candidate.service";

const CreateCandidateForm = () => {
  const { register, handleSubmit } = useForm();

  const handleCreation = handleSubmit(async ({ email, uploads }) => {
    const upload = uploads ? uploads[0] : null;
    console.log("uploads", uploads);

    const result = await candidateService.createCandidate({ email, upload });
    console.log("result inform =", result);
  });

  return (
    <div className="CreateCandidateForm">
      <form onSubmit={handleCreation}>
        <input
          type="text"
          {...register("email", { required: true })}
          placeholder="candidate email"
        />
        <input type="file" {...register("uploads", { required: true })} />
        <button type="submit">Save </button>
      </form>
    </div>
  );
};

export default CreateCandidateForm;
