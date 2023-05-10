import { Stack, Typography, Grid } from "@mui/material";
import dayjs from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import TextFieldCustomInput from "../../Atoms/TextFieldCustomInput";
import { useState } from "react";

const Education = ({ setInputs }) => {
  const [value, setValue] = useState(dayjs("2022-04-17"));

  const education = ["school", "fieldOfStudy"];

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
                  label="Start Date"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </LocalizationProvider>
            </Stack>
            <Stack width="100%">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="End Date" />
              </LocalizationProvider>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Education;
