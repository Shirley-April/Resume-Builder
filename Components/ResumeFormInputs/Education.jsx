import { Stack, Typography, Grid } from "@mui/material";
import dayjs from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import TextFieldCustomInput from "../../Atoms/TextFieldCustomInput";
import { useState } from "react";

const Education = ({ setInputs, inputs }) => {
  const education = ["school", "fieldOfStudy"];

  const handleStartDate = (newValue) => {
    console.log("DATE", formattedEndDate);
    setInputs((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        startDate: newValue.format("MMMM YYYY"),
      },
    }));
  };

  const handleEndDate = (newValue) => {
    setInputs((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        endDate: newValue.format("MMMM YYYY"),
      },
    }));
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({
      ...values,
      education: {
        ...values.education,
        [name]: value,
      },
    }));
  };

  return (
    <Stack>
      <Typography variant="h5">Education</Typography>
      <Grid container spacing={3}>
        {education.map((education) => (
          <Grid item key={education} md={6} xs={12}>
            <TextFieldCustomInput
              key={education}
              name={education}
              label={education}
              onChange={handleChange}
            />
          </Grid>
        ))}
        <Grid item md={12}>
          <Stack direction="row" width="100%" spacing={2}>
            <Stack width="100%">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label={"Start Date"}
                  views={["month", "year"]}
                  value={inputs.education.startDate}
                  onChange={handleStartDate}
                />
              </LocalizationProvider>
            </Stack>
            <Stack width="100%">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label={"End Date"}
                  views={["month", "year"]}
                  value={inputs.education.endDate}
                  onChange={handleEndDate}
                />
              </LocalizationProvider>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Education;
