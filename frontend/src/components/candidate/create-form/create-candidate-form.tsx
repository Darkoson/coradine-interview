import { useForm } from "react-hook-form";
import "./create-candidate-form.css";
import { Candidate } from "../../../models/candidate";
import { MutationCreateCandidate } from "../../../graphql/hooks/candidate-request";

const CreateCandidateForm = () => {

  const { register, handleSubmit } = useForm<Candidate>();
 

  const handleCreation = handleSubmit(({ email, resume }) => {
    console.log(email, resume);

    const result = MutationCreateCandidate({ email, resume });
    console.log("result", result);
    
  });

  return (
    <div className="CreateCandidateForm">
      <form onSubmit={handleCreation}>
        <input
          type="text"
          {...register("email", { required: true })}
          placeholder="candidate email"
        />
        <input type="file" {...register("resume", { required: true })} />
        <button type="submit">Save </button>
      </form>
    </div>
  );
};

export default CreateCandidateForm;
