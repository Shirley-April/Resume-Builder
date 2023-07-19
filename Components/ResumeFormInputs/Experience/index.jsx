import { useSelector } from "react-redux";
import { useState } from "react";

import { Typography, Stack, Button } from "@mui/material";

import JobHistory from "./JobHistory";
import WorkExperience from "../WorkExperience";

const Experience = ({ values, newExperience }) => {
  const jobExperience = useSelector((state) => state.resume.workExperience);

  // if there is any job experiences on redux store then display them else nothing
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
          formOpen={formOpen}
          handleOpenForm={handleOpenForm}
          handleCloseForm={handleCloseForm}
          values={values}
          newExperience={newExperience}
        />
      ) : (
        <WorkExperience values={values} newExperience={newExperience}  handleCloseForm={handleCloseForm} />
      )}
    </Stack>
  );
};

export default Experience;
