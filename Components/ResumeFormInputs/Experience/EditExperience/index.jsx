import { useDispatch, useSelector } from "react-redux";
import { editExperience } from "../../../../features/resumeSlice";

import { Stack, Typography, Button, Grid, Box } from "@mui/material";
import TextFieldCustomInput from "../../../../Atoms/TextFieldCustomInput";

const EditExperence = ({ setInputs, inputs, value }) => {
  const resume = useSelector((state) => state.resume);
  const dispatch = useDispatch();

  // console.log("Edit value", value);

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

  const payload = {};

  const workExperience = ["jobTitle", "company"];

  return (
    <Stack rowGap={3}>
      <Grid container>
        <Stack width="100%" direction="row" columnGap={3}>
          {workExperience.map((experience) => (
            <Grid item key={experience} md={6} xs={12}>
              {console.log("VVVVV", value[experience])}
              <Stack spacing={2}>
                <TextFieldCustomInput
                  name={experience}
                  label={experience}
                  // value={value[experience]}
                  defaultValue={value[experience]}
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
          value={value.description}
          multiline
          onChange={handleChangeExperience}
          name="description"
        />
      </Box>
      <Button
        variant="outlined"
        fullWidth
        onClick={() =>
          dispatch(editExperience({ ...inputs.workExperience, id: value.id }))
        }
      >
        Add Experience
      </Button>
    </Stack>
  );
};

export default EditExperence;
