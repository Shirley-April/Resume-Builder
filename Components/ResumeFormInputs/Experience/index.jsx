import { useSelector } from "react-redux";
import { useState } from "react";

import { Typography, Stack, Button } from "@mui/material";

import JobHistory from "./JobHistory";
import WorkExperience from "../WorkExperience";

const Experience = ({ values }) => {
  const jobExperience = useSelector((state) => state.resume.workExperience);

  // if there is any job experiences on redux store then display them else hide
  let hasExperience = jobExperience.length ? true : false;

  const [experiences, setExperiences] = useState(hasExperience);
  const [formOpen, setFormOpen] = useState(false);

  const handleOpenForm = () => setFormOpen(true);
  const handleCloseForm = () => setFormOpen(false);

  return (
    <Stack>
      <Typography variant="h5">Work Experience</Typography>
      {experiences ? (
        <JobHistory
          form={formOpen}
          handleOpenForm={handleOpenForm}
          handleCloseForm={handleCloseForm}
          values={values}
        />
      ) : (
        <WorkExperience values={values} />
      )}
    </Stack>
  );
};

export default Experience;
