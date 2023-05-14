import { useState } from "react";

import { useDispatch } from "react-redux";
import { addContact, addSummary, addExperience, addEducation, addSkills,  } from "../../features/resumeSlice";

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

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addContact(inputs.contact));
    dispatch(addSummary(inputs.summary));
    dispatch(addExperience(inputs.workExperience))
    dispatch(addEducation(inputs.education))
    dispatch(addSkills(inputs.skills))
  };

  return (
    <Stack p={8} spacing={2}>
      <Contact setInputs={setInputs} />
      <ProfessionalSummary setInputs={setInputs} />
      <WorkExperience setInputs={setInputs} inputs={inputs} />
      <Skills setInputs={setInputs} />
      <Education setInputs={setInputs} />

      <Button
        variant="contained"
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default ResumeFormInputs;
