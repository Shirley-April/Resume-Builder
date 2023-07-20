import { useDispatch, useSelector } from "react-redux";
import { editExperience } from "../../../../features/resumeSlice";

import { Stack, Button, Grid, Box } from "@mui/material";
import FormikCustomInput from "../../../../Atoms/FormikCustomInput";
import { FieldArray } from "formik";

const EditExperence = ({ value, index }) => {
  const resume = useSelector((state) => state.resume);
  const dispatch = useDispatch();

  const workExperience = ["jobTitle", "company"];

  return (
    <Stack rowGap={3}>
      <Grid container>
        <Stack width="100%" direction="row" columnGap={3}>
          <FieldArray
            name="workExperience"
            render={(arrayHelpers) => (
              <>
                {workExperience.map((experience) => (
                  <Grid item key={experience} md={6} xs={12}>
                    <Stack spacing={2}>
                      <FormikCustomInput
                        name={`workExperience.${index}.${experience}`}
                      />
                    </Stack>
                  </Grid>
                ))}
              </>
            )}
          />
        </Stack>
      </Grid>
      <Box>
        <FormikCustomInput
          label="Work Description"
          multiline
          name={`workExperience.${index}.description`}
        />
      </Box>
      <Button
        variant="outlined"
        fullWidth
        onClick={() => dispatch(editExperience({ ...value, id: value.id }))}
      >
        Edit Experience
      </Button>
    </Stack>
  );
};

export default EditExperence;
