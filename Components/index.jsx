import { useState, useMemo } from "react";

import debounce from "lodash.debounce";

import { Box, Grid, Stack } from "@mui/material";

import ResumeFormInputs from "./ResumeFormInputs";
import ResumePreview from "./ResumePreview";

import dayjs from "dayjs";

const Resume = () => {
  const [inputs, setInput] = useState({
    contact: {
      jobTitle: "",
      name: "Shirley",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
    },
    summary: "",
    workExperience: {
      jobTitle: "",
      company: "",
      description: "NA",
    },
    skills: "•",
    education: {
      school: "AkiraChix",
      fieldOfStudy: "Full Stack Software Development",
      startDate: dayjs("Jan 2023"),
      endDate: dayjs("Dec 2023")
    },
  });

  // console.log("EDUCATION", inputs.education);

  const setInputs = useMemo(() => debounce(setInput, 50));

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
