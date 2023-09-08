import { useState } from "react";

import { Typography, Stack } from "@mui/material";

import JobHistory from "./JobHistory";
import WorkExperience from "../WorkExperience";

const Experience = ({ values, newExperience, setFieldValue }) => {
  // if there is any job experiences on redux store then display them else nothing
  let hasExperience = values.length ? true : false;

  const [formOpen, setFormOpen] = useState(false);

  const handleOpenForm = () => setFormOpen(true);
  const handleCloseForm = () => setFormOpen(false);

  return (
    <Stack>
      <Typography variant="h5" fontWeight="bold">Work Experience</Typography>
      {hasExperience ? (
        <JobHistory
          formOpen={formOpen}
          handleOpenForm={handleOpenForm}
          handleCloseForm={handleCloseForm}
          values={values}
          newExperience={newExperience}
          setFieldValue={setFieldValue}
        />
      ) : (
        <WorkExperience
          values={values}
          newExperience={newExperience}
          setFieldValue={setFieldValue}
          handleCloseForm={handleCloseForm}
        />
      )}
    </Stack>
  );
};

export default Experience;
