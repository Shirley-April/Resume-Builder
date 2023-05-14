import { useDispatch, useSelector } from "react-redux";

import { Stack, Grid, Typography, Box, Button } from "@mui/material";

import TextFieldCustomInput from "../../Atoms/TextFieldCustomInput";

import { addExperience } from "../../features/resumeSlice";

const WorkExperience = ({ setInputs, inputs }) => {
  const resume = useSelector(state => state.resume)
  const dispatch = useDispatch();

  const handleChangeExperience = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevState) => ({
      ...prevState,
      workExperience: {
        ...prevState.workExperience,
        [name]: value,
      },
    }));
  };

  const workExperience = ["jobTitle", "company"];

  return (
    <Stack rowGap={3}>
      <Typography variant="h5">Work Experience</Typography>
      <Grid container>
        <Stack width="100%" direction="row" columnGap={3}>
          {workExperience.map((experience) => (
            <Grid item key={experience} md={6} xs={12}>
              <Stack spacing={2}>
                <TextFieldCustomInput
                  name={experience}
                  label={experience}
                  onChange={handleChangeExperience}
                />
              </Stack>
            </Grid>
          ))}
        </Stack>
      </Grid>
      <Box>
        <TextFieldCustomInput
          label="Work Description"
          multiline
          onChange={handleChangeExperience}
          name="description"
        />
      </Box>
      <Button variant="outlined" fullWidth onClick={() => dispatch(addExperience(inputs.workExperience))}>
        Add Experience
      </Button>
    </Stack>
  );
};

export default WorkExperience;
