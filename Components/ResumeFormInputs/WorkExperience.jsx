import { useDispatch, useSelector } from "react-redux";

import { Stack, Grid, Typography, Box, Button } from "@mui/material";

import TextFieldCustomInput from "../../Atoms/TextFieldCustomInput";
import FormikCustomInput from "../../Atoms/FormikCustomInput";

import { addExperience } from "../../features/resumeSlice";

const WorkExperience = ({ handleCloseForm, inputs, values }) => {
  console.log("Work Values", values);
  const resume = useSelector((state) => state.resume);
  const dispatch = useDispatch();

  const workExperience = ["jobTitle", "company"];

  return (
    <Stack rowGap={3}>
      <Typography variant="h5">Work Experience</Typography>
      <Grid container>
        <Stack width="100%" direction="row" columnGap={3}>
          {workExperience.map((experience) => (
            <Grid item key={experience} md={6} xs={12}>
              <Stack spacing={2}>
                <FormikCustomInput
                  name={`workExperience.${experience}`}
                  // label={experience}
                  // onChange={handleChangeExperience}
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
          // onChange={handleChangeExperience}
          name="workExperience.description"
        />
      </Box>
      <Button
        variant="outlined"
        fullWidth
        onClick={() => {dispatch(addExperience(values)); handleCloseForm()}}
      >
        Add Experience
      </Button>
    </Stack>
  );
};

export default WorkExperience;
