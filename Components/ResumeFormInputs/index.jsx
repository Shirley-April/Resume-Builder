import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import {
  addContact,
  addSummary,
  addEducation,
  addSkills,
} from "../../features/resumeSlice";

import { Button, Stack } from "@mui/material";

import Contact from "./Contact";
import ProfessionalSummary from "./ProfessionalSummary";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

const ResumeFormInputs = ({ inputs, setInputs }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addContact(inputs.contact));
    dispatch(addSummary(inputs.summary));
    dispatch(addEducation(inputs.education));
    dispatch(addSkills(inputs.skills));
    router.push("final-resume");
  };

  return (
    <Stack p={8} spacing={2}>
      <Contact setInputs={setInputs} />
      <ProfessionalSummary setInputs={setInputs} />
      <Experience setInputs={setInputs} inputs={inputs} />
      <Skills setInputs={setInputs} inputs={inputs} />
      <Education setInputs={setInputs} inputs={inputs} />

      {/* <Button
        variant="contained"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </Button> */}
    </Stack>
  );
};

export default ResumeFormInputs;
