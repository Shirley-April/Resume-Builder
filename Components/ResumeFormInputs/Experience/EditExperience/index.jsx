import { useDispatch, useSelector } from "react-redux";
import { editExperience } from "../../../../features/resumeSlice";

import { Stack, Button, Grid, Box } from "@mui/material";
import FormikCustomInput from "../../../../Atoms/FormikCustomInput";

const EditExperence = ({ value }) => {
  const resume = useSelector((state) => state.resume);
  const dispatch = useDispatch();

  // console.log("Edit value", value);

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
                <FormikCustomInput
                  name={`experience.${experience}`}
                  // label={experience}
                  // value={value[experience]}
                  // defaultValue={value[experience]}
                />
              </Stack>
            </Grid>
          ))}
        </Stack>
      </Grid>
      <Box>
        <FormikCustomInput
          label="Work Description"
          // value={value.description}
          multiline
          name="workExperience.description"
        />
      </Box>
      <Button
        variant="outlined"
        fullWidth
        // onClick={() =>
        //   dispatch(editExperience({ ...inputs.workExperience, id: value.id }))
        // }
      >
        Add Experience
      </Button>
    </Stack>
  );
};

export default EditExperence;
