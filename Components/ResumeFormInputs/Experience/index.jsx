import { useSelector } from "react-redux";
import { useState } from "react";

import { Typography, Stack, Button } from "@mui/material";

import JobHistory from "./JobHistory";
import WorkExperience from "../WorkExperience";

const Experience = ({ setInputs, inputs }) => {
  const jobHistory = useSelector((state) => state.resume.workExperience);

  // if there is any job experiences on store then display them else hide
  let expLength = jobHistory.length ? true : false;

  console.log("Lenngth", jobHistory.length);
  const [experiences, setExperiences] = useState(expLength);
  const [form, setForm] = useState(false);

  const handleOpenForm = () => setForm(true);
  const handleCloseForm = () => setForm(false);

  return (
    <Stack>
      <Typography variant="h5">Work Experience</Typography>
      {experiences ? (
        <JobHistory
          form={form}
          handleOpenForm={handleOpenForm}
          handleCloseForm={handleCloseForm}
          setInputs={setInputs} inputs={inputs}
        />
      ) : (
        <WorkExperience setInputs={setInputs} inputs={inputs} />
        )}
    </Stack>
  );
};

export default Experience;
