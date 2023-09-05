import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

import { useFormikContext } from "formik";

import { Stack, Grid, Box, Button } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import FormikCustomInput from "../../Atoms/FormikCustomInput";

import { addExperience } from "../../features/resumeSlice";

const WorkExperience = ({ handleCloseForm, values, newExperience }) => {

  const router = useRouter();

  const { id } = router.query;

  const dispatch = useDispatch();

  const formik = useFormikContext();

  const workExperience = ["jobTitle", "company"];

  const updateJobExp = () => {
    const updatedExp = [...values, newExperience];

    formik.resetForm({
      values: {
        ...formik.values,
        newExperience: {
          jobTitle: "",
          company: "",
          description: "",
          resumeId: id,
        },
      },
    });
    formik.setFieldValue("workExperience", updatedExp);
  };

  return (
    <Stack rowGap={3}>
      <Grid container>
        <Stack spacing={3} width="100%">
          <Stack width="100%" direction="row" columnGap={3}>
            {workExperience.map((experience) => (
              <Grid item key={experience} md={12} xs={12}>
                <Stack spacing={2}>
                  <FormikCustomInput name={`newExperience.${experience}`} />
                </Stack>
              </Grid>
            ))}
          </Stack>
          <Grid item md={12}>
            <Stack direction="row" width="100%" columnGap={3}>
              <Stack width="100%">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    name="newExperience.startDate"
                    label={"Start Date"}
                    views={["month", "year"]}
                    onChange={(newValue) =>
                      formik.setFieldValue(
                        "newExperience.startDate",
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
                    onChange={(newValue) =>
                      formik.setFieldValue(
                        "newExperience.endDate",
                        newValue.format("MMMM YYYY")
                      )
                    }
                  />
                </LocalizationProvider>
              </Stack>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
      <Box>
        <FormikCustomInput
          label="Work Description"
          multiline
          name="newExperience.description"
        />
      </Box>
      
      <Button
        variant="outlined"
        fullWidth
        onClick={() => {
          dispatch(addExperience({ ...newExperience, resumeId: id }));
          handleCloseForm();
          updateJobExp();
        }}
      >
        Add Experience
      </Button>
    </Stack>
  );
};

export default WorkExperience;
