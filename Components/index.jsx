import { useState } from "react";

import { Box, Grid, Stack } from "@mui/material";

import ResumeFormInputs from "./ResumeFormInputs";
import ResumePreview from "./ResumePreview";

const Resume = () => {
  const [inputs, setInputs] = useState({
    contact: {
      "jobTitle": "",
      name: "Shirley",
      phone: "",
      email: "",
      linkedn: "",
      github: "",
    },
    summary: "",
    workExperience: {
      jobTitle: "",
      company: "",
      description: "NA",
    },
    skills: "",
    education: {
      school: "AkiraChix",
      fieldOfStudy: "Full Stack Software Development",
    },
  });
  return (
    <Box>
      <Grid container sx={{ background: "#dcebf7" }} spacing={2}>
        <Grid item md={7} border={1}>
          <Stack sx={{ background: "#ffffff" }}>
            <ResumeFormInputs setInputs={setInputs} inputs={inputs} />
          </Stack>
        </Grid>
        <Grid item md={5}>
          <Stack sx={{ background: "#ffffff" }}>
            <ResumePreview inputs={inputs} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
