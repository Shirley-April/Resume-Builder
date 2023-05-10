import { useState } from "react";

import dayjs from "dayjs";

import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Contact from "./Contact";
import ProfessionalSummary from "./ProfessionalSummary";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";

const ResumeFormInputs = ({ inputs, setInputs }) => {
  const [value, setValue] = useState(dayjs("2022-04-17"));

  console.log("DATA", inputs);

  const experiences = [
    "Collaborated with team member to ensure...",
    "Collaborated with team member to ensure...",
  ];

  const skills = [
    "JavaScript",
    "Next Js",
    "Node Js",
    "Material UI",
    "React native",
  ];

  const education = ["School Name", "Field of study"];

  const handleSubmit = () => {
    alert(JSON.stringify(inputs, null, 2));
  };

  return (
    <Stack p={8} spacing={2}>
      <Contact setInputs={setInputs} />
      <ProfessionalSummary setInputs={setInputs} />
      <WorkExperience setInputs={setInputs} />
      <Skills setInputs={setInputs} />
      <Education setInputs={setInputs} />

      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  );
};

export default ResumeFormInputs;
