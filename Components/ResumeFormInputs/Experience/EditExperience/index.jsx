import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { editExperience } from "../../../../features/resumeSlice";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import { Stack, Button, Grid, Box, Typography } from "@mui/material";
import FormikCustomInput from "../../../../Atoms/FormikCustomInput";
import { FieldArray, useFormikContext } from "formik";

const EditExperence = ({ value, index }) => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();

  const formik = useFormikContext();

  const workExperience = [
    { id: 1, name: "jobTitle", label: "Job Title" },
    { id: 2, name: "company", label: "Company" },
  ];

  return (
    <Stack rowGap={3}>
      <Grid container>
        <Stack width="100%" direction="row" columnGap={3}>
          <FieldArray
            name="workExperience"
            render={() => (
              <>
                {workExperience.map((experience) => (
                  <Grid item key={experience.id} md={6} xs={12}>
                    <Stack>
                      <Typography>{experience.label}</Typography>
                      <FormikCustomInput
                        name={`workExperience.${index}.${experience.name}`}
                      />
                    </Stack>
                  </Grid>
                ))}
              </>
            )}
          />
        </Stack>
        <Stack width="100%" direction="row" columnGap={3} pt={3}>
          <Grid item md={6} xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name={`workExperience.${index}.startDate`}
                label={"Start Date"}
                views={["month", "year"]}
                slotProps={{ textField: { fullWidth: true } }}
                value={dayjs(formik.values.workExperience[index].startDate)}
                onChange={(newValue) =>
                  formik.setFieldValue(
                    `workExperience.${index}.startDate`,
                    newValue.format("MMMM YYYY")
                  )
                }
              />
            </LocalizationProvider>
          </Grid>
          <Grid item md={6} xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name={`workExperience.${index}.endDate`}
                label={"End Date"}
                views={["month", "year"]}
                slotProps={{ textField: { fullWidth: true } }}
                value={dayjs(formik.values.workExperience[index].endDate)}
                onChange={(newValue) =>
                  formik.setFieldValue(
                    `workExperience.${index}.endDate`,
                    newValue.format("MMMM YYYY")
                  )
                }
              />
            </LocalizationProvider>
          </Grid>
        </Stack>
      </Grid>
      <Box>
        <Typography>Work Description</Typography>
        <FormikCustomInput
          label="Work Description"
          multiline
          name={`workExperience.${index}.description`}
        />
      </Box>
      <Button
        variant="outlined"
        fullWidth
        onClick={() =>
          dispatch(editExperience({ ...value, id: value.id, resumeId: id }))
        }
      >
        Edit Experience
      </Button>
    </Stack>
  );
};

export default EditExperence;
