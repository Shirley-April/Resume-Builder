import { useDispatch, useSelector } from "react-redux";

import { Stack, Grid, Box, Button } from "@mui/material";

import FormikCustomInput from "../../Atoms/FormikCustomInput";

import { addExperience } from "../../features/resumeSlice";

const WorkExperience = ({ handleCloseForm, inputs, values, newExperience }) => {
  const resume = useSelector((state) => state.resume);
  const dispatch = useDispatch();

  const workExperience = ["jobTitle", "company"];

  return (
    <Stack rowGap={3}>
      <Grid container>
        <Stack width="100%" direction="row" columnGap={3}>
          {workExperience.map((experience) => (
            <Grid item key={experience} md={6} xs={12}>
              <Stack spacing={2}>
                <FormikCustomInput
                  name={`newExperience.${experience}`}
                />
              </Stack>
            </Grid>
          ))}
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
          dispatch(addExperience(newExperience));
          handleCloseForm();
        }}
      >
        Add Experience
      </Button>
    </Stack>
  );
};

export default WorkExperience;
