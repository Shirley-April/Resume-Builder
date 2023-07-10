import { Stack, Typography, Grid } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import FormikCustomInput from "../../Atoms/FormikCustomInput";

const Education = ({ setFieldValue, values }) => {
  console.log("Education Value", values.endDate);

  const education = ["school", "fieldOfStudy"];

  return (
    <Stack>
      <Typography variant="h5">Education</Typography>
      <Grid container spacing={3}>
        {education.map((education) => (
          <Grid item key={education} md={6} xs={12}>
            <FormikCustomInput
              key={education}
              name={`education.${education}`}
            />
          </Grid>
        ))}
        <Grid item md={12}>
          <Stack direction="row" width="100%" spacing={2}>
            <Stack width="100%">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  name="education.startDate"
                  label={"Start Date"}
                  views={["month", "year"]}
                  // value={inputs.education.startDate}
                  onChange={(newValue) =>
                    setFieldValue(
                      "education.startDate",
                      newValue.format("MMMM YYYY")
                    )
                  }
                />
              </LocalizationProvider>
            </Stack>
            <Stack width="100%">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label={"End Date"}
                  views={["month", "year"]}
                  // value={values.endDate}
                  onChange={(newValue) =>
                    setFieldValue(
                      "education.endDate",
                      newValue.format("MMMM YYYY")
                    )
                  }
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
